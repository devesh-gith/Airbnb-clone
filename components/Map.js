import React from "react";
import ReactMapGL from "react-map-gl";
import { useState } from "react/cjs/react.development";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ayush0011/ckxmuumwg3zr514kr69691j8l"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
