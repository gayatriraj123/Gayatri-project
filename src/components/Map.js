import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

function Map({ latitude, longitude, name }) {
  const defaultCenter = {
    lat: latitude,
    lng: longitude
  };

  return (
    <GoogleMap
      center={defaultCenter}
      zoom={10}
      mapContainerStyle={{
        width: "100%",
        height: "400px"
      }}
    >
      <Marker
        position={defaultCenter}
        icon={{
          url: "/path/to/custom-marker.png", // You can use a custom marker icon
          scaledSize: new window.google.maps.Size(30, 30)
        }}
      />

      {/* You can add more markers or info windows if needed */}
      {/* <Marker
        position={{ lat: anotherLat, lng: anotherLng }}
      >
        <InfoWindow>
          <div>
            {/* Content for the info window *}
          </div>
        </InfoWindow>
      </Marker> */}
    </GoogleMap>
  );
}

export default Map;
