import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent so that it only loads on the client side
const MapComponent = dynamic(() => import("../Map/Map"), {
  ssr: false,
});

const StatePage = ({ stateName }) => {
  return <MapComponent stateName={stateName} />;
};

// Fetch the stateName from the URL and pass it as a prop to the component
export async function getServerSideProps(context) {
  const { stateName } = context.params;

  return {
    props: {
      stateName,
    },
  };
}

export default StatePage;
