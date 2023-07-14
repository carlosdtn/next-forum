const TagSectionSkeleton = () => {
  return (
    <section className="flex flex-row justify-between w-full px-5 py-5 border-2 rounded-xl shadow-4xl border-zinc-700/90 bg-amber-100">
      <div>
        <div className="w-16 h-16 bg-gray-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col justify-center w-full ml-5">
        <div className="w-32 h-5 mb-1 bg-gray-500 rounded-full animate-pulse"></div>
        <div className="w-full h-4 mb-1 bg-gray-500 rounded-full animate-pulse"></div>
        <div className="w-full h-4 bg-gray-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col justify-center w-32 ml-5">
        <div className="w-full rounded-full bg-emerald-600 h-9 animate-pulse"></div>
      </div>
    </section>
  )
}

export default TagSectionSkeleton
