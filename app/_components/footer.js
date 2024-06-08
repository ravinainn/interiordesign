export default function Footer() {
  return (
    <div className="flex justify-center  gap-32 flex-wrap items-center pb-20">
      <div className="text-7xl font-bold leading-10">
        ICRAVE
        <br />
        <span className="text-5xl font-thin ">CREATIONS</span>
      </div>

      <div>
        <h4 className="text-2xl font-semibold pb-4">Company</h4>
        <div className="flex flex-col">
          <p className="text-lg font-light"> Refer a friend</p>
          <p className="text-lg font-light"> How it works</p>
          <p className="text-lg font-light"> Career</p>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-semibold pb-4">Company</h4>
        <div className="flex flex-col">
          <p className="text-lg font-light"> Refer a friend</p>
          <p className="text-lg font-light"> How it works</p>
          <p className="text-lg font-light"> Career</p>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-semibold">Contact Us</h4>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-light">
            <span className="font-semibold">Call: </span> +91 999xxxx888
          </p>
          <p className="text-lg font-light">
            <span className="font-semibold">Email: </span> design.interior.com
          </p>
        </div>
      </div>
    </div>
  );
}
