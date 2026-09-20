import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isLight
          ? "bg-[#F8FCFC] text-[#132B2D]"
          : "bg-[#071F22] text-[#F5F8F8]"
      }`}
    >
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;