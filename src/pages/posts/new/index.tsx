import { Button } from "@/components/ui/button"
import { Dialog, Transition } from "@headlessui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { XIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import FileInput from "@/components/FileInput"
import TextAreaInput from "@/components/TextAreaInput"
import TextInput from "@/components/TextInput"

const schema = yup.object().shape({
  title: yup.string().required("Título es requerido"),
  content: yup.string().required("Contenido es requerido"),
  category: yup.string().required("Categoría es requerida"),
  file: yup.mixed(),
})

const NewPost = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [isOpen, setIsOpen] = useState(false)
  const [moderation, setModeration] = useState<{
    cacheID: string
    result: boolean
    trackingId: string
    adultClassificationScore: number
    isImageAdultClassified: boolean
    racyClassificationScore: number
    isImageRacyClassified: boolean
    advancedInfo: string[]
    status: {
      code: number
      description: string
      exception: any
    }
  }>({} as any)

  const router = useRouter()
  const file = watch("file")

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append("Titulo", data.title)
    formData.append("Contenido", data.content)
    formData.append("Categoria", data.category)
    if (data.file?.[0]) {
      formData.append("Imagen", data.file[0])
    }

    const token = window.localStorage.getItem("token")
    const authorizationHeader = token ? `Bearer ${JSON.parse(token)}` : ""

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NGROK_URL}/Posts/Register`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: authorizationHeader,
        },
      }
    )
    const post = await res.json()
    console.log({ post })

    if (post.isSuccess) router.push(`/`)
    closeModal()
    setModeration(post.moderationImageResult)
  }

  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        variant="secondary"
        className="rounded-full"
      >
        Nuevo Post
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  type="button"
                  className="fixed top-0 left-0 p-1 mt-3 ml-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  <XIcon className="w-5 h-5 fill-blue-500" />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-center text-gray-900"
                >
                  Nuevo Post
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid mt-2 gap-y-4"
                >
                  <TextInput
                    label="Título"
                    name="title"
                    register={register}
                    errors={errors.title}
                  />
                  <TextAreaInput
                    label="Contenido"
                    name="content"
                    register={register}
                    errors={errors.content}
                  />
                  <TextAreaInput
                    label="Categoria"
                    name="category"
                    register={register}
                    errors={errors.category}
                  />
                  <FileInput
                    // @ts-ignore
                    label="Imagen"
                    errors={errors.file}
                    {...register("file")}
                  />
                  {file?.[0] && (
                    <div className="grid grid-cols-1 gap-y-2">
                      <Image
                        className="rounded-lg"
                        src={URL.createObjectURL(file[0])}
                        width={300}
                        height={300}
                        alt="Imagen de publicación"
                      />
                    </div>
                  )}
                  <Button
                    type="submit"
                    variant="secondary"
                    className="mt-4"
                    disabled={isSubmitting}
                  >
                    Publicar
                  </Button>
                </form>

                <div className="mt-4"></div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {moderation?.status?.code && (
        <div className="px-3 py-4 mt-4 border-2 border-red-500 rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-center text-gray-900">
            Moderación de imagen
          </h3>
          <div className="mt-4">
            <p className="text-sm font-medium leading-6 text-center text-gray-900">
              {moderation?.isImageAdultClassified && (
                <>
                  <span className="font-bold text-red-500">
                    Imagen clasificada como adulta
                  </span>
                  <br />
                  <span className="text-gray-500">
                    Puntaje de clasificación de adulto:
                  </span>
                  <br />
                  <span className="text-lg font-bold text-red-500">
                    {Number(moderation?.adultClassificationScore).toFixed(2)}
                  </span>
                </>
              )}
              <br />
              <br />
              {moderation?.isImageRacyClassified && (
                <>
                  <span className="font-bold text-red-500">
                    Imagen clasificada como racy
                  </span>
                  <br />
                  <span className="text-gray-500">
                    Puntaje de clasificación de racismo:
                  </span>
                  <br />
                  <span className="text-lg font-bold text-red-500">
                    {Number(moderation?.racyClassificationScore).toFixed(2)}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default NewPost
