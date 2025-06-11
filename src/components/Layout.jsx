import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    /*{Carregamento do Header}*/
    <div className="min-h-auto w-screen m-0 p-0">
      <Header />
      <main className="mt-[110px] w-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
