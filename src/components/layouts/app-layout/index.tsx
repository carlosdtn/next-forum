import Header from "@/components/header"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../Sidebar"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user } = useAuthContext()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("user: ", user)
    if (user == null) router.push("/auth/signin")
  }, [user])

  return (
    <>
      {user?.providerId ? (
        <div className="flex flex-row">
          <Sidebar isOpen={isOpen} />
          <div className="flex flex-col items-center w-11/12 max-w-2xl gap-10 py-12 mx-auto">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full">
          <h1>Only logged in users can view this page</h1>
        </div>
      )}
    </>
  )
}

export default AppLayout
