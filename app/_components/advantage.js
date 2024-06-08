import image1 from "../_assets/image1.jpg";
import image2 from "../_assets/image2.jpg";

import Image from "next/image";

export default function Advantages() {
  return (
    <div className="py-20">
      <div className="flex justify-center items-center flex-wrap gap-4">
        <div className="w-1/2 sm:w-2/5">
          <h4 className="text-lg font-light tracking-wider">CATEGORIES</h4>
          <h1 className="text-4xl font-bold pb-8">What We Offer?</h1>

          <div>
            <h2 className=" text-2xl font-light py-4">Residential Property</h2>
            <p className="text-md font-light tracking-wider">
              Designs from Luxury Avenue Interiors are guaranteed to be original
              and fresh. We provide interior design services for homes,
              businesses, and public buildings using only the most qualified
              professionals in the field who are dedicated to achieving the
              goals set by our clients and the unique requirements of each
              project.
            </p>
          </div>
        </div>
        <div className=" sm:block w-2/5 ">
          <Image className="mx-auto shadow-2xl  w-96" src={image1} alt="" />
        </div>
      </div>
      <div className="flex justify-center flex-row items-center flex-wrap gap-4">
        <div className="hidden sm:block w-2/5 relative">
          <Image className="w-96 shadow-2xl" src={image2} alt="" />
        </div>
        <div className="w-4/5 sm:w-2/5">
          <div>
            <h2 className="text-2xl font-light py-4">Commercial Property</h2>
            <p className="text-md font-light tracking-wider">
              We offer services and technical knowledge in the field of
              commercial interior design through our interior design firm.
              Additionally, we work with manufacturers to renovate furniture.
              These services can all be combined with our brand, which operates
              across various industries. We provide a wide range of services,
              including retail and exhibition design, restaurant, café, and
              office interior design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
