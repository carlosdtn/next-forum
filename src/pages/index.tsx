import TagSection from "@/components/sections/tag-section"
import Section from "@/components/sections/section"
import { Button } from "@/components/ui/button"
import PostCard from "@/components/cards/post-card"
import { MOCK_POSTS, MOCK_TAGS } from "@/lib/mock"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full -mb-5">
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-2xl font-bold prose prose-invert xl:text-3xl">
            Destacado
          </h2>
          <Button variant="primary" size="sm">
            Tags
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          {MOCK_TAGS.map((tag, index) => (
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
        <div className="flex flex-col gap-8">
          {MOCK_POSTS.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
