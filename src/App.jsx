import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlites from "./components/Highlites";
import Model from "./components/Model";
import Features from './components/Features'
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlites />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}

export default App;
