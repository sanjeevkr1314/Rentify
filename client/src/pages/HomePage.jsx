import React from "react";
import { useState, useEffect } from "react";
import PropertyCard from "../components/Layout/PropertyCard.jsx";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/buyer/properties",
    );
    // console.log(data.properties);
    setProperties(data.properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <h1>Available Properties</h1>
      <div className="properties-container">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            className="property-card"
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
