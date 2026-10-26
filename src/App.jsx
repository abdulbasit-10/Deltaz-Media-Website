import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages = {
    "/": Home,
    "/about": About,
    "/services": Services,
  };
  const Page = pages[pathname] || Home;

  return (
    <div
      className="
        min-h-screen overflow-x-hidden
        bg-[#071F22]
        text-[#F5F8F8]
      "
    >
      <Header />

      <main
        className="pt-[69px]"
      >
        <Page />
      </main>

      <Footer />
    </div>
  );
}

export default App;
