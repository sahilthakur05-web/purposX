"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "80%",
  height: "80%",
};

const center = {
  lat: 20.5937, // Center of India
  lng: 78.9629,
};

const statesData = [
  {
    name: "Mumbai",
    total: 10,
    latitude: 19.076,
    longitude: 72.8777,
    districts: [
      {
        name: "Mumbai District 1",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        propertyDetails: "Property details for Mumbai District 1.",
      },
      {
        name: "Mumbai District 2",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,

        image:
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      },
      {
        name: "Mumbai District 3",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        propertyDetails: "Property details for Mumbai District 3.",
      },
      {
        name: "Mumbai District 4",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        propertyDetails: "Property details for Mumbai District 4.",
      },
      {
        name: "Mumbai District 5",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 5.",
      },
      {
        name: "Mumbai District 6",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 6.",
      },
      {
        name: "Mumbai District 7",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 7.",
      },
      {
        name: "Mumbai District 8",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 8.",
      },
      {
        name: "Mumbai District 9",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 9.",
      },
      {
        name: "Mumbai District 10",
        total: 1,
        latitude: 19.076 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/mumbai-district-2.jpg",
        propertyDetails: "Property details for Mumbai District 10.",
      },
    ],
  },
  {
    name: "Pune",
    total: 20,
    latitude: 18.5204,
    longitude: 73.8567,
    districts: [
      {
        name: "Pune District 1",
        total: 1,
        latitude: 18.5204 + (Math.random() - 0.5) * 0.1,
        longitude: 73.8567 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        propertyDetails: "Property details for Pune District 1.",
      },
      {
        name: "Pune District 2",
        total: 1,
        latitude: 18.5204 + (Math.random() - 0.5) * 0.1,
        longitude: 73.8567 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
        propertyDetails: "Property details for Pune District 2.",
      },
      {
        name: "Pune District 3",
        total: 1,
        latitude: 18.5204 + (Math.random() - 0.5) * 0.1,
        longitude: 73.8567 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        propertyDetails: "Property details for Pune District 3.",
      },
      {
        name: "Pune District 4",
        total: 1,
        latitude: 18.5204 + (Math.random() - 0.5) * 0.1,
        longitude: 73.8567 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
        propertyDetails: "Property details for Pune District 4.",
      },
      // Add more districts as needed
    ],
  },
  {
    name: "Chennai",
    total: 30,
    latitude: 13.0827,
    longitude: 80.2707,
    districts: [
      {
        name: "Chennai District 1",
        total: 1,
        latitude: 13.0827 + (Math.random() - 0.5) * 0.1,
        longitude: 80.2707 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/chennai-district-1.jpg",
        propertyDetails: "Property details for Chennai District 1.",
      },
      {
        name: "Chennai District 2",
        total: 1,
        latitude: 13.0827 + (Math.random() - 0.5) * 0.1,
        longitude: 80.2707 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/chennai-district-2.jpg",
        propertyDetails: "Property details for Chennai District 2.",
      },
      // Add more districts as needed
    ],
  },
  {
    name: "Delhi",
    total: 50,
    latitude: 28.7041,
    longitude: 77.1025,
    districts: [
      {
        name: "Delhi District 1",
        total: 1,
        latitude: 28.7041 + (Math.random() - 0.5) * 0.1,
        longitude: 77.1025 + (Math.random() - 0.5) * 0.1,
        image:
          "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
        propertyDetails: "Property details for Delhi District 1.",
      },
      {
        name: "Delhi District 2",
        total: 1,
        latitude: 28.7041 + (Math.random() - 0.5) * 0.1,
        longitude: 77.1025 + (Math.random() - 0.5) * 0.1,
        image: "https://example.com/delhi-district-2.jpg",
        propertyDetails: "Property details for Delhi District 2.",
      },
      // Add more districts as needed
    ],
  },

  // Continue adding states as needed
];

// Function to create a custom marker as an SVG data URL

const createCustomMarker = (total) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <!-- Background circle -->
      <circle cx="20" cy="20" r="20" fill="#0073e1" />

      <!-- Home icon -->
      <path d="M10 20 L20 10 L30 20 V30 H22 V22 H18 V30 H10 Z" fill="white" transform="scale(0.7) translate(6, 1)" />

      <!-- Number on top -->
      <text x="20" y="35" font-size="14" fill="white" text-anchor="middle" font-weight="bold">${total}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const MapComponent = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [mapZoom, setMapZoom] = useState(3); // Set initial zoom level slightly closer
  const [mapCenter, setMapCenter] = useState(center);
  const [showCentralMarker, setShowCentralMarker] = useState(true);

  const handleStateClick = (state) => {
    setSelectedState(state);
    setSelectedDistrict(null); // Reset any previously selected district
    setMapZoom(12); // Zoom level to state
    setMapCenter({ lat: state.latitude, lng: state.longitude });

    // Update the URL without navigating away from the current page
    window.history.pushState({}, "", `cities/${state.name}`);
  };

  const handleCentralMarkerClick = () => {
    setMapZoom(5); // Zoom level to show all states
    setMapCenter(center);
    setShowCentralMarker(false);

    // Update the URL without navigating away from the current page
    window.history.pushState({}, "", "about/cities");
  };

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    setMapZoom(12); // Zoom level for district details
    setMapCenter({ lat: district.latitude, lng: district.longitude });
  };

  const handleMapClick = () => {
    setMapZoom(12); // Reset zoom to slightly closer view
    setMapCenter(center);
    setSelectedState(null);
    setSelectedDistrict(null);
    setShowCentralMarker(true);
    window.history.pushState({}, "", "/about");
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBt7CW8XR6aXbcILOcjfzCSjK50rYSlmK8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={mapZoom}
        onClick={handleMapClick}
      >
        {/* Central Marker for India */}
        {showCentralMarker && (
          <Marker
            position={center}
            onClick={handleCentralMarkerClick}
            icon={createCustomMarker(110)} // Central marker with "110"
          />
        )}

        {/* State Markers with custom circle */}

        {!selectedState &&
          !showCentralMarker &&
          statesData.map((state) => (
            <Marker
              key={state.name}
              position={{ lat: state.latitude, lng: state.longitude }}
              onClick={() => handleStateClick(state)}
              icon={createCustomMarker(state.total)} // Custom marker for each state
            />
          ))}

        {/* District Markers when a state is selected */}
        {selectedState &&
          selectedState.districts.map((district) => (
            <Marker
              key={district.name}
              position={{ lat: district.latitude, lng: district.longitude }}
              onClick={() => handleDistrictClick(district)}
              icon={createCustomMarker(district.total)} // Custom marker for each district
            />
          ))}

        {/* InfoWindow for Selected District */}
        {selectedDistrict && (
          <InfoWindow
            position={{
              lat: selectedDistrict.latitude,
              lng: selectedDistrict.longitude,
            }}
            onCloseClick={() => setSelectedDistrict(null)}
          >
            <div style={{ maxWidth: "200px" }}>
              <h2>{selectedDistrict.name}</h2>
              <img
                src={selectedDistrict.image}
                alt={selectedDistrict.name}
                style={{ width: "100%", height: "auto" }}
              />
              <p>{selectedDistrict.propertyDetails}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
