interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl min-w-full min-h-screen gap-10 px-6 py-12 mx-auto bg-black">
      {children}
    </div>
  )
}

export default AppLayout
