import TagSection from "@/components/sections/tag-section"
import Section from "@/components/sections/section"
import { Button } from "@/components/ui/button"
import PostCard from "@/components/cards/post-card"
import { MOCK_POSTS, MOCK_TAGS } from "@/lib/mock"
import { useEffect, useState } from "react"
import getAllDocuments from "@/firebase/getData"
import { set } from "react-hook-form"
import TagSectionSkeleton from "@/skeleton/tag-section-skeleton"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [loadingTag, setLoadingTag] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_NGROK_URL}/Posts/Get`)
      const json = await res.json()
      console.log({ data: json.data })
      setPosts(json.data)
    }
    fetchPosts()
    fetchCategory()
  }, [])

  const fetchCategory = async () => {
    const tags = await getAllDocuments("Category")
    if (!tags) {
      setLoadingTag(true)
    } else {
      setLoadingTag(false)
      setTags(tags)
    }

    // if (error) {
    //   console.error("Error al obtener el documento:", error)
    //   return
    // }

    // if (result?.exists()) {
    //   const categoryData = result.data()
    //   // Haz algo con los datos de la categoría, como guardarlos en el estado.
    //   // Por ejemplo, si tienes un estado llamado `categories`:
    //   setTags(categoryData)
    // } else {
    //   // El documento no existe.
    //   console.log("El documento no existe." + error)
    // }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full -mb-5">
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-2xl font-bold prose prose-invert xl:text-3xl">
            Destacado
          </h2>
          <Button variant="primary" size="sm">
            Etiquetas
          </Button>
        </div>
        <div className="flex flex-col w-full gap-6">
          {loadingTag
            ? //made a array prototipe from tagsection skeleton
              [...Array(7)].map((_, index) => (
                <TagSectionSkeleton key={index} />
              ))
            : tags.map((tag, index) => (
                <TagSection key={index} loading={false} tag={tag} />
              ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-5 -mb-5">
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-2xl font-bold prose prose-invert xl:text-3xl">
            Todos las publicaciones
          </h2>
          <Button variant="primary" size="sm">
            Publicaciones
          </Button>
        </div>
        <div className="flex flex-col w-full gap-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
