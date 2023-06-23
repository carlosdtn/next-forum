import PostCard from "@/components/cards/post-card"
import { MOCK_POSTS } from "@/lib/mock"

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between w-full -mb-5">
        <h2 className="text-2xl font-bold prose dark:prose-invert xl:text-3xl">
          Destacado
        </h2>
        <a href="">Tags</a>
      </div>
      <div className="flex flex-col items-center justify-between w-full -mb-5">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl font-bold prose dark:prose-invert xl:text-3xl">
            All posts
          </h2>
          <a href="">Tags</a>
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
