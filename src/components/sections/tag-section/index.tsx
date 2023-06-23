const TagSection = () => {
  return (
    <section className="flex w-full gap-2">
      <div className="bg-white"></div>
      <div>
        <h2 className="text-xl prose line-clamp-1 text-ellipsis dark:prose-invert xs:text-2xl">
          Nombre
        </h2>
        <p className="text-sm leading-5 line-clamp-2 text-ellipsis text-zinc-600 dark:text-zinc-400 xs:text-base">
          Descripción
        </p>
      </div>
    </section>
  )
}

export default TagSection
