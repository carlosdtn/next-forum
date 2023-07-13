"use client"
import { IPost } from "@/components/cards/post-card"
import { MOCK_POSTS } from "@/lib/mock"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

const Post = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLiked, setIsLiked] = useState(0)

  const id = usePathname().split("/")[2]
  const post: IPost | null =
    MOCK_POSTS.find((post) => post.id === Number(id)) ?? null

  const rtf = new Intl.RelativeTimeFormat("es", { style: "long" })
  let timeAgo = "-"
  if (post) {
    const days = Math.floor(
      (new Date().getTime() - new Date(post?.fechaCreacion).getTime()) /
        (1000 * 60 * 60 * 24)
    )
    timeAgo = rtf.format(-days, "day")
  }

  return (
    <div className="flex flex-col relative gap-3 shadow p-4 w-full max-w-7xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 rounded">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-2xl font-extrabold text-slate-800">
          {" "}
          {post?.Titulo}{" "}
        </h1>
        <div className="px-4 py-1 text-slate-100 font-light text-xs bg-green-500 rounded">
          {post?.Categoria}
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 ">
        <Image
          alt="Imagen"
          width={80}
          height={80}
          src={post?.CreadoPor.Avatar ?? "https://i.pravatar.cc/200"}
          className="flex-shrink-0 object-cover rounded-full aspect-square border-slate-700 shadow"
        />
        <p className="text-slate-800 text-base">{post?.CreadoPor.Nombre} </p>
        <p className="text-slate-600 text-base italic">{timeAgo} </p>
      </div>
      <div className="flex max-h-[500px] overflow-y-auto mb-4 px-4">
        <p className="text-slate-800 font-normal text-base">
          {post?.Contenido}
        </p>
        <Image
          alt="Imagen"
          width={500}
          height={500}
          src={post?.UrlImagen ?? "https://picsum.photos/seed/picsum/200/300"}
          className="flex-shrink-0 object-cover rounded-l-lg aspect-square myimage"
        />
      </div>

      <div className="absolute -bottom-5 flex flex-row justify-between w-full">
        <div className="flex flex-row gap-2">
          <button
            onClick={() => {
              setIsLiked(1)
            }}
            title="Like this post"
            aria-label="Like this post"
            className="flex gap-2 rounded bg-emerald-500 px-2 py-1 shadow-lg hover:opacity-80 dark:bg-teal-900 sm:p-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className={isLiked === 1 ? "text-blue-700" : "text-white"}
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path>
            </svg>
            <p className={isLiked === 1 ? "text-blue-700" : "text-white"}>
              {" "}
              {(post?.Reacciones.likes ?? 0) + (isLiked === 1 ? 1 : 0)}
            </p>
          </button>
          <button
            onClick={() => {
              setIsLiked(-1)
            }}
            title="Dislike this post"
            aria-label="Dislike this post"
            className="flex gap-2  rounded bg-emerald-500 px-2 py-1 shadow-lg hover:opacity-80 dark:bg-teal-900 sm:p-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className={isLiked === -1 ? "text-blue-700" : "text-white"}
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"></path>
            </svg>
            <p className={isLiked === -1 ? "text-blue-700" : "text-white"}>
              {" "}
              {(post?.Reacciones.dislikes ?? 0) + (isLiked === -1 ? 1 : 0)}
            </p>
          </button>
        </div>
        <button
          onClick={() => {
            setIsFavorite(!isFavorite)
          }}
          title="Favorite this post"
          aria-label="Favorite this post"
          className="flex gap-2 rounded bg-emerald-500 px-2 py-1 shadow-lg hover:opacity-80 dark:bg-teal-900 sm:p-2 relative right-6"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            className={isFavorite ? "text-pink-600" : "text-white"}
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Post
