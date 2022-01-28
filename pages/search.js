import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function search({ searchPlace }) {
  console.log(searchPlace);
  const router = useRouter();
  const { location, startDate, endDate, countGuests } = router.query;
  const formatterStartDate = format(new Date(startDate), "dd MMMM yy");
  console.log(formatterStartDate);
  const formatterEnDate = format(new Date(endDate), "dd MMMM yy");
  const ranges = `${formatterStartDate} - ${formatterEnDate}`;

  return (
    <div className="">
      <div className="">
        <Header
          placeHolder={`${location} | ${ranges} | ${countGuests} Guests`}
        />
      </div>
      <main className="flex flex-col">
        <section className="flex p-3">
          <div className=" space-y-3">
            <h2 className="text-xs">300+ {ranges}</h2>

            <h1 className="text-3xl font-bold">Stays in {location}</h1>

            <div className="hidden md:inline-flex space-x-2 text-sm">
              <p className="buttons">Cancellation Flexibility</p>
              <p className="buttons">Type of Place</p>
              <p className="buttons">Price</p>
              <p className="buttons">Rooms and Beds</p>
              <p className="buttons">More filter</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col p-4 space-y-3">
          {searchPlace.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </div>
      </main>

      <section className="hidden lg:inline-flex lg:min-w-[600px]">
        <Map />
      </section>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchPlace = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchPlace,
    },
  };
}
