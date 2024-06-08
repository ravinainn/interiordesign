import Link from "next/link";
export default function NavBar() {
  return (
    <div className="absolute top-10 bg-white bg-opacity-30 w-screen z-50 flex justify-between items-center px-16 py-4">
      <div className="text-2xl font-bold leading-3 ">
        <span className="text-xl font-thin ">INTERIOR</span>
        <br /> DESIGN
      </div>
      <div className="flex gap-3  text-lg font-semibold opacity-100 ">
        <Link className="" href={"/"}>
          Home
        </Link>
        <Link href={"#advantages"}>Advantages</Link>
        <Link href={"#contact"}>Contact Us</Link>
      </div>
    </div>
  );
}
