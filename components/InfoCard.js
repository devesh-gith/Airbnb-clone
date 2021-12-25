import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex border hover:bg-gray-100 rounded-xl p-2 active:scale-95 transition transform duration-150 ease-out cursor-pointer hover:shadow-md">
      <div className="relative h-32 w-40 md:h-52 md:w-80 flex-shrink-0 hover:opacity-80 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5 space-y-2">
        <div className="flex justify-between">
          <p className="text-md text-gray-500">{location}</p>
          <HeartIcon className="h-6 cursor-pointer active:bg-red" />
        </div>

        <h4 className="text-2xl font-semibold">{title}</h4>

        <span className=""></span>

        <p className="text-sm text-gray-500">{description}</p>

        <div className="flex justify-between items-end">
          <p className="text-sm flex">
            <StarIcon className="h-5 text-red-400 mr-1" />
            {star}
          </p>

          <div className="">
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight text-md">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
