"use-client"
import Image from "next/image"
import Link from "next/link"
export interface IPost {
  id: number
  Categoria: string
  Contenido: string
  Titulo: string
  UrlImagen: string
  fechaActualizacion: string
  fechaCreacion: string
  CreadoPor: User
  Comentarios?: Comentarios[]
  Reacciones: Reacciones
}
export interface Comentarios {
  Contenido: string
  CreadoPor: User
  fechaCreacion: string
}
export interface Reacciones {
  likes: number
  dislikes: number
}
export interface User {
  id: number
  Nombre: string
  Avatar: string
}
export interface IPostCardProps {
  post: IPost
}

const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  const id = post.id

  return (
    <Link href={`/posts/${id}`}>
      <div className="relative flex flex-col justify-center w-full gap-5 px-10 py-5 border-2 cursor-pointer rounded-xl shadow-3xl transition-border hover:shadow-4xl border-zinc-700/90 bg-amber-100 hover:border-zinc-500">
        <div>
          <div className="flex w-full gap-4 border-2 rounded-lg shadow-sm border-neutral-700 bg-white">
            <div className="relative flex-shrink-0 group">
              <Image
                alt="Imagen"
                width={200}
                height={200}
                src={"https://picsum.photos/200"}
                className="flex-shrink-0 object-cover rounded-l-lg aspect-square w-28 sm:w-36"
              />
            </div>
            <div className="flex flex-col justify-between w-full py-3 pr-2">
              <div className="w-full">
                <p className="font-bold word-break-word line-clamp-1">
                  {post.Titulo}
                </p>
                <p className="text-sm word-break-word line-clamp-2 sm:line-clamp-3">
                  {post.Contenido}
                </p>
              </div>
              <a
                className="mt-1 text-sm underline word-break-word line-clamp-1 text-emerald-700 text-emerald-500"
                target="_blank"
                rel="noreferrer"
                href={post.UrlImagen}
              >
                Ver imagen
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-3 -left-1 top-3 sm:-left-3">
          <div className="flex flex-col items-center gap-2 p-1 bg-teal-100 border rounded-md shadow-md border-emerald-500/20 bg-teal-900">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-emerald-500"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path>
            </svg>
            <p className="text-emerald-500">1</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-1 bg-teal-100 border rounded-md shadow-md border-emerald-500/20 bg-teal-900">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-emerald-500"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"></path>
            </svg>
            <p className="text-emerald-500">0</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold prose word-break-word prose-invert">
          {post.Titulo}
        </h2>
        <div className="overflow-hidden prose content-mask line-clamp-4 max-h-56 text-ellipsis prose-headings:text-base prose-code:text-xs markdown__content word-break-word prose-emerald prose-invert prose-hr:border-neutral-700">
          <pre>
            <code>{"console.log('Hello Developers!');"}</code>
          </pre>
          <p>{post.Contenido}</p>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex flex-wrap gap-2 mt-2 ">
            <a className="" href={`/posts/tags/#`}>
              <span
                role="link"
                className="flex cursor-pointer select-none items-center whitespace-nowrap rounded-md border-[1px] border-neutral-300 p-2 text-sm transition border-neutral-800 text-neutral-200 bg-emerald-500 bg-teal-900 text-white border-none hover:opacity-80 px-2 py-1 "
                data-state="closed"
              >
                {post.Categoria}
              </span>
            </a>
          </div>
          <p className="mt-2 ml-2 text-xs min-w-min sm:text-sm">
            by{" "}
            <a
              className="font-bold underline text-emerald-600 text-emerald-500"
              href="/users/cliuk3v4x0000l40frpfipa3q"
            >
              @next-forum
            </a>
          </p>
        </div>
      </div>
    </Link>
  )
}
export default PostCard
