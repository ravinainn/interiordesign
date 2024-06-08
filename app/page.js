import Image from "next/image";
import Hero from "./_components/hero";
import Advantages from "./_components/advantage";
import Contact from "./_components/contact";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
}
