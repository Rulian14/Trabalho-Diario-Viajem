import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px] px-4 max-w-screen-xl mx-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;
