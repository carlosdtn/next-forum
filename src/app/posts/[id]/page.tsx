"use client"
import { usePathname } from "next/navigation"

const Post = () => {
  const id = usePathname().split("/")[2]

  return <div>{`Hola ${id}`}</div>
}

export default Post
