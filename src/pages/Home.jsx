import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
<Stats />
<Features />
<CourseCard />
<Footer />
    </>
  );
}

export default Home;