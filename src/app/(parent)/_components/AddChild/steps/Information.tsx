"use client"

import { Button } from "@/components/ui/button"
import {
  ErrorMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addChild, updateUserData } from "@/lib/redux"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const personalInfoSchema = z.object({
  childFullName: z
    .string()
    .trim()
    .min(1, "Please enter your child's full name")
    .min(2, "Please enter your child's full name (at least 2 characters)")
    .max(50, "Name is too long (maximum 50 characters)")
    .refine((name) => /^[a-zA-Z\s'-]+$/.test(name), {
      message:
        "Name should only contain letters, spaces, hyphens, and apostrophes",
    }),

  password: z
    .string()
    .min(1, "Please enter a password")
    .min(8, "Password must be at least 8 characters long")
    .refine((v) => /[A-Z]/.test(v), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((v) => /[a-z]/.test(v), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((v) => /[0-9]/.test(v), {
      message: "Password must contain at least one number",
    })
    .refine((v) => /[^A-Za-z0-9]/.test(v), {
      message: "Password must contain at least one special character",
    }),

  email: z
    .email({ message: "Please enter a valid email address" })
    .min(1, "Please enter your email address")
    .transform((v) => v.toLowerCase()),
  phoneNumber: z
    .string()
    .min(1, "Please enter your phone number")
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number is too long" }),
})
type PersonalInfoValues = z.infer<typeof personalInfoSchema>

interface PersonalInfoStepProps {
  nextStep: () => void
}

export function PersonalInfoStep({ nextStep }: PersonalInfoStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { userData }: any = useAppSelector((state) => state.signup)
  const dispatch = useAppDispatch()

  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      childFullName: userData?.child_full_name ?? "",
      password: userData?.password ?? "",
    },
    mode: "onBlur",
  })

  function onSubmit(values: PersonalInfoValues) {
    const { password, childFullName } = values

    const inputData = {
      name: childFullName,
      username: childFullName.split(" ")?.[0]?.trim(),
      password: password.trim(),
    }

    setIsSubmitting(true)
    dispatch(addChild({ inputData }))
      .unwrap()
      .then(() => {
        dispatch(updateUserData({ data: inputData }))
        nextStep()
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" md:w-[420px] grid grid-cols-1 space-y-6 w-full text-white"
      >
        <FormField
          control={form.control}
          name="childFullName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-white">Child Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              {fieldState.error && (
                <ErrorMessage>{fieldState.error.message}</ErrorMessage>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-white">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*******" {...field} />
              </FormControl>
              {fieldState.error && (
                <ErrorMessage>{fieldState.error.message}</ErrorMessage>
              )}
            </FormItem>
          )}
        />

        <Button type="submit">{isSubmitting ? "Saving..." : "Continue"}</Button>
      </form>
    </Form>
  )
}
