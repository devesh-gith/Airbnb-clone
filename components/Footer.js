import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 space-y-4  md:grid-cols-2 lg:grid-cols-4 bg-gray-200 p-12 mt-14 md:">
      {/* ABOUT */}
      <div className="space-y-2 border-b-2 border-gray-300">
        <h2 className="text-sm font-semibold">ABOUT</h2>
        <p className="button">How Airbnb works</p>
        <p className="button">Newsroom</p>
        <p className="button">Investor</p>
        <p className="button">Airbnb Plus</p>
        <p className="button">Airbnb Luxe</p>
      </div>

      {/* COMMUNITY */}
      <div className="space-y-2  border-b-2 border-gray-300">
        <h2 className="text-sm font-semibold"> COMMUNITY</h2>
        <p className="button">Acessibilty</p>
        <p className="button">This is not a real site</p>
        <p className="button">its a pretty awesome clone</p>
        <p className="button">Refferal accepted</p>
      </div>

      {/* HOST */}
      <div className="space-y-2 border-b-2 border-gray-300">
        <h2 className="text-sm font-semibold">HOST</h2>
        <p className="button">Individuals</p>
        <p className="button">Presents</p>
        <p className="button">AirCover: protection for Hosts</p>
        <p className="button">How to host responsibly</p>
        <p className="button">Visit our community forum</p>
      </div>

      {/* SUPPORT */}
      <div className="space-y-2  border-b-2 border-gray-300">
        <h2 className="text-sm font-semibold">SUPPORT</h2>
        <p className="button">Help Centre</p>
        <p className="button">Safety information</p>
        <p className="button">Cancellation options</p>
        <p className="button">Our COVID-19 Response</p>
        <p className="button">Report a neighbourhood concern</p>
      </div>
    </div>
  );
}

export default Footer;
