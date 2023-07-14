import Section from "../section"
import Image from "next/image"

type Props = {
  loading: boolean
  tag?: any
}

type TitleProps = {
  name?: string
  description?: string
  avatar: string
  loading?: boolean
}

const SectionHeader = ({ name, description, avatar, loading }: TitleProps) => {
  return (
    <div className="flex items-center w-full gap-2">
      <img
        src={avatar}
        quality={100}
        className="w-16 h-16 rounded-full"
        alt={`${name} avatar`}
      />
      <div className="px-4">
        <h2 className="text-xl font-semibold prose line-clamp-1 text-ellipsis prose-invert xs:text-2xl">
          {name}
        </h2>
        <p className="text-sm leading-5 line-clamp-2 text-ellipsis xs:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
SectionHeader.defaultProps = {
  name: "Carabayllo",
  description:
    "El distrito de Carabayllo es uno de los cuarenta y tres distritos que conforman la provincia de Lima, ubicada en el departamento homónimo, en el Perú.",
  avatar: "/images/Carabayllo.jpg",
}

const TagSection: React.FC<Props> = ({ loading, tag }) => {
  return (
    <Section
      loading={loading}
      content={
        <SectionHeader
          name={tag?.data.nombre}
          description={tag?.data.descripcion}
          avatar={tag?.data.imagen}
          loading={loading}
        />
      }
    />
  )
}

export default TagSection
