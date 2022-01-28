import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { FaSun, FaMoon } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

function Header({ placeHolder }) {
  const { toggleColorMode } = useColorMode();
  const [inputFil, setInputFil] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [countGuests, setCountGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const cancelSubmit = () => {
    setInputFil("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: inputFil,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        countGuests,
      },
    });
    setInputFil("");
  };
  return (
    <header className="sticky bg-white shadow-md p-2 grid grid-cols-3  z-50 mt-0">
      {/* left */}
      <div className="relative flex items-center cursor-pointer h-8  my-auto ">
        <Image
          onClick={() => router.push("/")}
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* center */}
      <div className="flex  items-center space-x-2 md:border-2 rounded-full p-1 shadow-sm ">
        <input
          value={inputFil}
          onChange={(e) => setInputFil(e.target.value)}
          type="text"
          placeholder={placeHolder || "Start the search"}
          className={
            placeHolder
              ? "text-xs outline-none  flex-grow ml-5 text-gray-600 overflow-hidden "
              : "text-xs outline-none  flex-grow ml-5 text-gray-600 overflow-hidden "
          }
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 rounded-full p-2 text-white  cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-3 text-gray-500 cursor-pointer">
        <p className="hidden md:inline text-sm font-bold">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-5" />

        <div className="flex items-center border-2 rounded-full shadow-sm p-1  hover:shadow-lg">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-5" />
        </div>
        <IconButton
          variant="ghost"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </div>
      {inputFil && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            minDate={new Date()}
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number Of Guests
            </h2>

            <UserIcon className="h-5 " />
            <input
              value={countGuests}
              onChange={(e) => setCountGuests(e.target.value)}
              className="w-10 h-5 ml-2 text-red-400 outline-none"
              type="number"
              min="1"
              name=""
              id=""
            />
          </div>
          <div className="flex justify-end mb-3">
            <button
              onClick={cancelSubmit}
              className="flex-grow text-gray-500 border rounded-md hover:bg-gray-500 hover:text-white active:scale-95 transition transform duration-100 py-1"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-500 border ml-1 rounded-md hover:bg-red-500 hover:text-white active:scale-95 transition transform duration-100 py-1"
            >
              {" "}
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
