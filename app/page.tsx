import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/section/about/About";
import Projects from "@/components/section/projects/Projects";
import Contact from "@/components/section/contact/Contact";
import Footer from "@/components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
