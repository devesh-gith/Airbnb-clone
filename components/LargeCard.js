import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative h-96 min-w-[300px]">
      <div className="">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-32 left-12 space-y-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="font-semibold">{description}</p>

        <button className="text-white bg-black p-1 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition transform duration-100 ease-out ">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
