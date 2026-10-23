import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#071F22] text-[#F5F8F8]"
    >
      <Header />
      <main className="pt-[69px]">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
