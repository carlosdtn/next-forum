import TagSection from "@/components/sections/tag-section"
import Section from "@/components/sections/section"
import { Button } from "@/components/ui/button"

const Tags = [
  {
    name: "Carabayllo",
    description:
      "El distrito de Carabayllo es uno de los cuarenta y tres distritos que conforman la provincia de Lima, ubicada en el departamento homónimo, en el Perú.",
    avatar: "/images/Carabayllo.jpg",
  },
  {
    name: "Gastronomía peruana",
    description:
      "Este foro está dedicado a discutir y compartir información sobre la deliciosa gastronomía peruana, sus platos típicos, restaurantes recomendados, recetas tradicionales, etc.",
    avatar: "/images/Carabayllo.jpg",
  },
  {
    name: "Turismo en Cusco",
    description:
      "En este foro podrás encontrar todo lo relacionado con el turismo en la ciudad de Cusco, como recomendaciones de lugares turísticos, actividades, alojamientos, consejos de viaje, entre otros.",
    avatar: "/images/Carabayllo.jpg",
  },
  {
    name: "Deportes en Lima",
    description:
      "Discute sobre los deportes más populares en Lima, Perú. Comparte información sobre eventos deportivos, clubes, ligas locales, consejos de entrenamiento, y más.",
    avatar: "/images/Carabayllo.jpg",
  },
  {
    name: "Educación en el Perú",
    description:
      "Este foro se enfoca en la educación en el Perú, abarcando temas como el sistema educativo, colegios, universidades, métodos de enseñanza, retos y oportunidades del sector educativo, etc.",
    avatar: "/images/Carabayllo.jpg",
  },
]

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between w-full -mb-5">
        <h2 className="text-2xl font-bold prose dark:prose-invert xl:text-3xl">
          Destacado
        </h2>
        <Button variant="primary" size="sm">
          Tags
        </Button>
      </div>
      <div className="flex flex-col gap-6">
        {Tags.map((tag, index) => (
          <TagSection key={index} loading={false} tag={tag} />
        ))}
      </div>
    </>
  )
}
