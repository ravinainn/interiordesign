import Image from "next/image";
import Hero from "./_components/hero";
import Contact from "./_components/contact";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import Category from "./_components/category";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <Category />
      <Contact />
      <Footer />
    </div>
  );
}
