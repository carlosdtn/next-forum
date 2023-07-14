"use client"
import { useState } from "react"
export const Sidebar = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="bg-gradient-to-l from-purple-400 to-pink-600 w-72 shadow ">
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
              className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
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
          {isLogged && (
            <>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/posts/following"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-neutral-800 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg text-slate-900">
                      {" "}
                      Siguiendo{" "}
                    </p>
                    <p className=" text-xs text-gray-600">
                      Publicaciones de personas que sigues
                    </p>
                  </div>
                </a>
              </li>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/posts/tags/subscribed"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-neutral-800mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg text-slate-900">
                      Subscripciones
                    </p>
                    <p className=" text-xs text-gray-600">
                      Etiquetas a las que estas suscrito(a)
                    </p>
                  </div>
                </a>
              </li>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/posts/feed"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 10 16"
                    className="text-neutral-800 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg text-slate-900">
                      {" "}
                      Explorar{" "}
                    </p>
                    <p className=" text-xs text-gray-600">
                      Publicaciones que podrian gustarte
                    </p>
                  </div>
                </a>
              </li>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/posts/liked"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="text-neutral-800 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg text-slate-900">
                      Tus gustos
                    </p>
                    <p className=" text-xs text-gray-600">
                      Las publicaciones que te gustaron
                    </p>
                  </div>
                </a>
              </li>

              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/users/clk1wsnrk0000la0fs8s74niw"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-neutral-800 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg  text-slate-900">
                      {" "}
                      Perfil{" "}
                    </p>
                    <p className=" text-xs text-gray-600">Ir a tu perfil</p>
                  </div>
                </a>
              </li>
              <li className="box-border flex-1">
                <a
                  className="flex w-auto gap-2 rounded-[8px] p-2 transition-all hover:border hover:border-red-500 xl:p-3 mt-4 -xs:mt-2 box-border "
                  href="/posts/favorited"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="text-neutral-80 mt-1 xl:w-[27px] xl:h-[27px] w-[23px] h-[23pxa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                  <div>
                    <p className="text-base xl:text-lg  text-slate-900">
                      {" "}
                      Favoritos{" "}
                    </p>
                    <p className=" text-xs text-gray-600">
                      Tus publicaciones favoritas
                    </p>
                  </div>
                </a>
              </li>
            </>
          )}
        </ul>

        <ul className="flex flex-col gap-1 xl:gap-3 mb-4">
          <li className="box-border flex-1">
            {isLogged ? (
              <a
                className="items-center font-base disabled:cursor-not-allowed disabled:opacity-60 relative text-lg px-4 py-2 bg-emerald-500 text-white hover:opacity-80 flex w-full justify-center rounded-[8px] font-bold shadow-md transition-opacity -xs:py-1 -xs:text-[15px]"
                onClick={() => setIsLogged(false)}
              >
                <span> Cerrar Sesión </span>
              </a>
            ) : (
              <a
                className="items-center font-base disabled:cursor-not-allowed disabled:opacity-60 relative text-lg px-4 py-2 bg-emerald-500 text-white hover:opacity-80 flex w-full justify-center rounded-[8px] font-bold shadow-md transition-opacity -xs:py-1 -xs:text-[15px]"
                onClick={() => setIsLogged(true)}
              >
                <span> Iniciar Sesión </span>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}
