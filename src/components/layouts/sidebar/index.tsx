import { Button } from "@/components/ui/button"
import Home from "@/components/icons/home"
import Link from "next/link"
import Etiqueta from "@/components/icons/etiqueta"
import router from "next/router"
import { User2 } from "lucide-react"
import { useAuthContext } from "@/context/AuthContext"

type Props = {
  isOpen: boolean
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {
  const { setUser, user } = useAuthContext()

  const gotoSignIn = () => {
    router.push("/auth/signin")
  }
  const gotoNewPost = () => {
    router.push("/posts/new")
  }
  const signOut = () => {
    setUser(null)
    router.push("/auth/signin")
  }

  return (
    isOpen && (
      <div className="transition ease-in-out duration-200 fixed z-50 shadow bg-gradient-to-l from-teal-400 to-emerald-600 max-w-[16rem] ">
        <nav className="flex flex-col justify-between h-screen px-2">
          <ul className="flex flex-col gap-1 xl:gap-3 ">
            <li className="box-border flex-1">
              <a
                className="flex w-auto gap-2 rounded-[8px] p-2 transition-all border border-transparent hover:border hover:border-emerald-300 xl:p-3 mt-4 -xs:mt-2 box-border "
                href="/"
              >
                <Home />
                <div>
                  <p className="text-base font-bold xl:text-lg text-slate-900">
                    {" "}
                    Inicio{" "}
                  </p>
                  <p className="text-xs text-gray-600"> Todos los posts </p>
                </div>
              </a>
            </li>
            <li className="box-border flex-1">
              <a
                className="flex w-auto gap-2 rounded-[8px] p-2 transition-all border border-transparent hover:border hover:border-emerald-300 xl:p-3 mt-4 -xs:mt-2 box-border "
                href="/posts/tags"
              >
                <Etiqueta />
                <div>
                  <p className="text-base xl:text-lg text-slate-900">
                    {" "}
                    Etiquetas{" "}
                  </p>
                  <p className="text-xs text-gray-600 ">
                    Mira todas las etiquetas
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-1 mb-4 xl:gap-3">
            {user ? (
              <>
                <li>
                  <Button className="w-full" onClick={gotoNewPost}>
                    Crear publicación
                  </Button>
                </li>
                <li className="box-border flex mt-2 gap-x-2">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-300 border-gray">
                    <User2 color="gray" />
                  </div>
                  <div className="flex flex-col items-center min-w-0 text-left">
                    <span className="cursor-pointer text-slate-800 font-semibold word-break-word -mb-1 line-clamp-1 w-fit max-w-[95%] text-ellipsis text-sm hover:underline xl:text-base">
                      {user?.email}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="text-sm font-medium text-red-700 cursor-pointer hover:underline dark:text-neutral-500"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button className="w-full" onClick={gotoSignIn}>
                    Iniciar Sesión
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    )
  )
}

export default Sidebar
