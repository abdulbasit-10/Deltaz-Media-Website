import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071F22]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;