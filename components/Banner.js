import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 text-center w-full ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className=" outline-none text-purple-500  bg-white px-8 py-2 my-3 shadow-sm hover:shadow-lg font-bold rounded-full active:scale-90 transition transform duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
