import Image from "next/image"
import Link from "next/link"
import { AdminLoginForm } from "./_components/Form"

const LoginPage = () => {
  return (
    <div className="max-lg:bg-[#F2F0EC]  bg-background flex flex-col items-center max-lg:py-20 lg:justify-center min-h-screen relative">
      <div className="absolute top-10 left-10 max-lg:hidden">
        <Link href="/" className="text-xl flex items-center z-50">
          <Image
            src="/xelaris.png"
            height={37}
            width={40.98}
            alt="logo-icon"
            sizes="100vw"
            className="w-auto h-[37px]"
          />
        </Link>
      </div>
      <div className="max-w-xl w-full">
        <AdminLoginForm />
      </div>
    </div>
  )
}

export default LoginPage
