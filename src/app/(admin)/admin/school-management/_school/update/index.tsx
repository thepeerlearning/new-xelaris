"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { getSchools, updateSchool } from "@/lib/redux"
import { useAppDispatch } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const validationSchema = z.object({
  title: z.string().min(1, "School name is required"),
  age: z.string().min(1, "Age range is required"),
})

type FormValues = z.infer<typeof validationSchema>

type SchoolRow = {
  id: string
  name: string
  age_range: string
}

export default function UpdateSchool({ row }: { row: SchoolRow }) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      title: "",
      age: "",
    },
    mode: "onBlur",
  })

  // ✅ keep form in sync when `row` changes, and when dialog opens
  useEffect(() => {
    if (!row) return
    form.reset({
      title: row.name ?? "",
      age: row.age_range ?? "",
    })
  }, [row, form])

  const onSubmit = (data: FormValues) => {
    const inputData = {
      id: row.id,
      name: data.title,
      age_range: data.age,
    }

    setLoading(true)
    dispatch(updateSchool({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setOpen(false)
        dispatch(getSchools())
      })
      .catch(() => setLoading(false))
  }

  const handleClose = () => setOpen(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v)
        // optional: reset when opening so it's always fresh
        if (v) {
          form.reset({
            title: row?.name ?? "",
            age: row?.age_range ?? "",
          })
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-[200px] h-[45px] py-[12px] gap-2 capitalize font-bold font-grotesk text-[14px]/[24px] md:text-[16px]/[20px] text-black rounded-md bg-white hover:scale-[1.008] transition duration-300 ease-in-out justify-start">
          <Edit /> Update school
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full flex flex-col gap-5">
        <DialogTitle>Update School</DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-white">School name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g., ABC School"
                        className={cn(fieldState.error && "border-red-500")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-white">Age range</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g., 11-14"
                        className={cn(fieldState.error && "border-red-500")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-4" />

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="w-1/2"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" className="w-1/2" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
