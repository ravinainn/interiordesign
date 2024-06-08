export default function Hero() {
  return (
    <div className="relative w-screen h-screen flex ">
      <div className="  w-1/3 h-screen bg-black text-white flex flex-col justify-center gap-4 px-20">
        <h4 className="text-3xl font-light tracking-wider">INTERIOR</h4>
        <h1 className="text-8xl font-bold">DESIGN</h1>
        <p className="text-md font-light tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          expedita exercitationem est modi quasi impedit voluptas debitis,
          adipisci totam accusamus!
        </p>
      </div>
      <div className="bg-hero w-4/5 h-screen bg-cover bg-center bg-no-repeat bg-fixed -z-10"></div>
    </div>
  );
}
