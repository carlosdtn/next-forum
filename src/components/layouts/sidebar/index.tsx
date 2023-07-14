import { Button } from "@/components/ui/button"
import Home from "@/components/icons/home"
import Link from "next/link"
import Etiqueta from "@/components/icons/etiqueta"
import router from "next/router"

const Sidebar = () => {
  const gotoSignIn = () => {
    router.push("/auth/signin")
  }

  return (
    <div className="shadow bg-gradient-to-l from-teal-400 to-emerald-600 max-w-52 ">
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
          <li>
            <a
              className="flex w-auto gap-2 rounded-[8px] p-2 transition-all border border-transparent hover:border hover:border-emerald-300 xl:p-3 mt-4 -xs:mt-2 box-border "
              href="/posts/new"
            >
              <Etiqueta />
              <div>
                <p className="text-base xl:text-lg text-slate-900">
                  {" "}
                  Publicaciones{" "}
                </p>
                <p className="text-xs text-gray-600 ">
                  Mira todas las etiquetas
                </p>
              </div>
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-1 mb-4 xl:gap-3">
          <li className="box-border">
            <Button className="w-full" onClick={gotoSignIn}>
              Iniciar Sesión
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
