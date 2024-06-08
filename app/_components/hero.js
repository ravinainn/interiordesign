export default function Hero() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute w-2/3 md:w-1/3 md:h-screen bg-black text-white md:relative flex flex-col justify-center md-2 md:gap-4 px-10 py-10 md:px-20">
        <h4 className="text-sm md:text-3xl font-thin md:font-light tracking-wider">
          INTERIOR
        </h4>
        <h1 className="text-xl md:text-8xl font-bold">DESIGN</h1>
        <p className="text-sm md:text-lg font-thin md:font-light tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          expedita exercitationem est modi quasi impedit voluptas debitis,
          adipisci totam accusamus!
        </p>
      </div>
      <div className="w-full bg-hero md:w-4/5 h-screen bg-cover bg-center bg-no-repeat bg-fixed -z-10"></div>
    </div>
  );
}
