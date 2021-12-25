import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center space-x-2 mt-4 hover:bg-gray-100 p-2 pl-3 cursor-pointer rounded-xl hover:scale-105 tansform transition  duration-200 ease-out ">
      <div className="relative h-14 w-14">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <p className="font-bold">{location}</p>
        <p className="text-sm font-semibold text-gray-600">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
