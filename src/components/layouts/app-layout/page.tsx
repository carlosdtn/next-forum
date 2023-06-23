interface AppLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AppLayoutProps) => {
  return <div className="flex">{children}</div>;
};

export default Layout;
