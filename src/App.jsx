import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContentMarketing from "./pages/ContentMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import Branding from "./pages/Branding";
import SEO from "./pages/SEO";
import BeOurNext from "./pages/BeOurNext";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages = {
    "/": Home,
    "/about": About,
    "/services": Services,
    "/services/content-marketing": ContentMarketing,
    "/services/social-media-marketing": SocialMediaMarketing,
    "/services/branding": Branding,
    "/services/seo": SEO,
    "/be-our-next": BeOurNext,
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
