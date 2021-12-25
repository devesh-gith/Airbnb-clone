import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out mt-4 ml-2">
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <p className="font-semibold text-lg mt-2">{title}</p>
    </div>
  );
}

export default MediumCard;
