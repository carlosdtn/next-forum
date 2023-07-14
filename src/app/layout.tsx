import "./globals.css"
import { Inter } from "next/font/google"
import AppLayout from "@/components/layouts/app-layout/index"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next Forum",
  description: "Foro de discusión sobre quejas y sugerencias ciudadanas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + " flex flex-row bg-white box-border"}>
        <div className="bg-gradient-to-l from-purple-400 to-pink-600 max-w-52 shadow ">
          <nav className="px-2 flex flex-col justify-between h-screen">
            <ul className="flex flex-col gap-1 xl:gap-3 ">
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-neutral-800  mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg font-bold text-slate-900">
                      {" "}
                      Inicio{" "}
                    </p>
                    <p className="text-xs text-gray-600"> Todos los posts </p>
                  </div>
                </a>
              </li>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 box-border "
                  href="/posts/tags"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-neutral-800 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg  text-slate-900">
                      {" "}
                      Etiquetas{" "}
                    </p>
                    <p className=" text-xs text-gray-600 ">
                      Mira todas las etiquetas
                    </p>
                  </div>
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-1 xl:gap-3 mb-4">
              <li className="box-border flex-1">
                <a
                  className="items-center font-base disabled:cursor-not-allowed disabled:opacity-60 relative text-lg px-4 py-2 bg-emerald-500 text-white hover:opacity-80 flex w-full justify-center rounded-[8px] font-bold shadow-md transition-opacity -xs:py-1 -xs:text-[15px]"
                  href="/auth/"
                >
                  <span className=""> Iniciar Sesión </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
