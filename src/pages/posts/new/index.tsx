import MarkdownEditor from "@/components/markdown-editor"
import { Input } from "@/components/ui/input"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"

const NewPost = () => {
  // const methods = useForm<CreatePostInput>({
  //   resolver: zodResolver(createPostSchema),
  //   shouldFocusError: false,
  // })

  // const { register, handleSubmit, control, formState, watch } = methods

  return (
    <>
      <h1 className="text-2xl font-medium text-center">
        Crear una publicación
      </h1>
      <Input placeholder="Nombre de la publicación..." />
      {/* <MarkdownEditor name="editor" control={}></MarkdownEditor> */}

      <div className="w-full h-12 bg-indigo-500 rounded-lg">asdasd</div>
    </>
  )
}

export default NewPost
