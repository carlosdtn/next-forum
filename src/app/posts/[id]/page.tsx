import { useParams } from "next/navigation"

const PostCard: React.FC<any> = () => {
  //GET THE ID OF THE URL
  const params = useParams()
  const id = params.uid

  return <h1> GHola {id} </h1>
}
export default PostCard
