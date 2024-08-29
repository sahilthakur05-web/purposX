// // components/CustomOverlay.js
// import React, { useState, useRef, useEffect } from "react";
// import { OverlayView } from "@react-google-maps/api";

// const CustomOverlay = ({ position, name, photoUrl }) => {
//   const [showPhoto, setShowPhoto] = useState(false);
//   const divRef = useRef(null);

//   useEffect(() => {
//     if (divRef.current) {
//       divRef.current.style.position = "absolute";
//       divRef.current.style.backgroundColor = "white";
//       divRef.current.style.padding = "10px";
//       divRef.current.style.borderRadius = "5px";
//       //   divRef.current.style.width = "100px";
//       divRef.current.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
//       divRef.current.style.fontSize = "12px";
//       divRef.current.style.color = "black";
//       divRef.current.style.whiteSpace = "nowrap"; // Prevent text wrapping
//     }
//   }, []);

//   return (
//     <OverlayView
//       position={position}
//       mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//       getPixelPositionOffset={() => ({ x: -20, y: -70 })}
//     >
//       <div
//         ref={divRef}
//         onClick={() => setShowPhoto(!showPhoto)}
//         style={{ cursor: "pointer" }}
//       >
//         {name}
//         {showPhoto && photoUrl && (
//           <div style={{ marginTop: "10px", textAlign: "center" }}>
//             <img
//               src={photoUrl}
//               alt={name}
//               style={{ width: "150px", height: "auto" }}
//             />
//           </div>
//         )}
//       </div>
//     </OverlayView>
//   );
// };

// export default CustomOverlay;

// "use client";

// import React, { useState } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const containerStyle = {
//   width: "80%",
//   height: "80%",
// };

// const center = {
//   lat: 20.5937, // Center of India
//   lng: 78.9629,
// };

// // Function to create a custom marker as an SVG data URL
// const createCustomMarker = (total) => {
//   const svg = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
//       <!-- Background circle -->
//       <circle cx="20" cy="20" r="20" fill="#0073e1" />

//       <!-- Home icon -->
//       <path d="M10 20 L20 10 L30 20 V30 H22 V22 H18 V30 H10 Z" fill="white" transform="scale(0.7) translate(6, 1)" />

//       <!-- Number on top -->
//       <text x="20" y="35" font-size="14" fill="white" text-anchor="middle" font-weight="bold">${total}</text>
//     </svg>
//   `;
//   return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
// };

// // Updated data based on provided information
// const statesData = [
//   {
//     name: "Mumbai",
//     total: 10,
//     latitude: 19.076,
//     longitude: 72.8777,
//     districts: Array.from({ length: 10 }, (_, i) => ({
//       name: `Mumbai District ${i + 1}`,
//       total: 1,
//       latitude: 19.076 + (Math.random() - 0.5) * 0.1, // Random offset for latitude
//       longitude: 72.8777 + (Math.random() - 0.5) * 0.1, // Random offset for longitude
//     })),
//   },
//   {
//     name: "Pune",
//     total: 20,
//     latitude: 18.5204,
//     longitude: 73.8567,
//     districts: Array.from({ length: 20 }, (_, i) => ({
//       name: `Pune District ${i + 1}`,
//       total: 1,
//       latitude: 18.5204 + (Math.random() - 0.5) * 0.1,
//       longitude: 73.8567 + (Math.random() - 0.5) * 0.1,
//     })),
//   },
//   {
//     name: "Chennai",
//     total: 30,
//     latitude: 13.0827,
//     longitude: 80.2707,
//     districts: Array.from({ length: 30 }, (_, i) => ({
//       name: `Chennai District ${i + 1}`,
//       total: 1,
//       latitude: 13.0827 + (Math.random() - 0.5) * 0.1,
//       longitude: 80.2707 + (Math.random() - 0.5) * 0.1,
//     })),
//   },
//   {
//     name: "Delhi",
//     total: 50,
//     latitude: 28.7041,
//     longitude: 77.1025,
//     districts: Array.from({ length: 50 }, (_, i) => ({
//       name: `Delhi District ${i + 1}`,
//       total: 1,
//       latitude: 28.7041 + (Math.random() - 0.5) * 0.1,
//       longitude: 77.1025 + (Math.random() - 0.5) * 0.1,
//     })),
//   },
// ];

// const MapComponent = () => {
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [mapZoom, setMapZoom] = useState(5); // Set initial zoom level slightly closer
//   const [mapCenter, setMapCenter] = useState(center);
//   const [showCentralMarker, setShowCentralMarker] = useState(true);

//   const handleStateClick = (state) => {
//     setSelectedState(state);
//     setSelectedDistrict(null); // Reset any previously selected district
//     setMapZoom(8); // Zoom level to state
//     setMapCenter({ lat: state.latitude, lng: state.longitude });
//     setShowCentralMarker(false);
//   };

//   const handleDistrictClick = (district) => {
//     setSelectedDistrict(district);
//     setMapZoom(12); // Zoom level for district details
//     setMapCenter({ lat: district.latitude, lng: district.longitude });
//   };

//   const handleMapClick = () => {
//     setMapZoom(5); // Reset zoom to slightly closer view
//     setMapCenter(center);
//     setSelectedState(null);
//     setSelectedDistrict(null);
//     setShowCentralMarker(true);
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBt7CW8XR6aXbcILOcjfzCSjK50rYSlmK8">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={mapCenter}
//         zoom={mapZoom}
//         onClick={handleMapClick}
//       >
//         {/* Central Marker for India */}
//         {showCentralMarker && (
//           <Marker
//             position={center}
//             onClick={handleMapClick}
//             icon={createCustomMarker(110)} // Central marker with "110"
//           />
//         )}

//         {/* State Markers with custom circle */}
//         {!selectedState &&
//           statesData.map((state) => (
//             <Marker
//               key={state.name}
//               position={{ lat: state.latitude, lng: state.longitude }}
//               onClick={() => handleStateClick(state)}
//               icon={createCustomMarker(state.total)} // Custom marker for each state
//             />
//           ))}

//         {/* District Markers when a state is selected */}
//         {selectedState &&
//           selectedState.districts.map((district) => (
//             <Marker
//               key={district.name}
//               position={{ lat: district.latitude, lng: district.longitude }}
//               onClick={() => handleDistrictClick(district)}
//               icon={createCustomMarker(district.total)} // Custom marker for each district
//             />
//           ))}

//         {/* InfoWindow for Selected District */}
//         {selectedDistrict && (
//           <InfoWindow
//             position={{
//               lat: selectedDistrict.latitude,
//               lng: selectedDistrict.longitude,
//             }}
//             onCloseClick={() => setSelectedDistrict(null)}
//           >
//             <div>
//               <h2>{selectedDistrict.name}</h2>
//               <p>Total Properties: {selectedDistrict.total}</p>
//             </div>
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;
