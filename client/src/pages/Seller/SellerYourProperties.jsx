import React, { useState, useEffect } from "react";
import SellerMenu from "../../components/Layout/SellerMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import PropertyCard from "../../components/Layout/PropertyCard";
import "./SellerYourProperties.css";
import { useNavigate } from "react-router-dom";

const SellerYourProperties = () => {
  const [properties, setProperties] = useState([]);
  const [auth] = useAuth();
  const navigate = useNavigate();
  const isBuyer = auth?.user?.buyer;

  useEffect(() => {
    if (isBuyer) navigate("/dashboard/seller");
    if (!auth?.token) navigate("/login");
  }, [auth?.token, isBuyer]);

  const fetchProperties = async () => {
    if (auth && auth.user) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/seller/my-properties/${auth.user._id}`
        );
        setProperties(response.data.properties);
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [auth.user._id]);

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <h2>Your Properties</h2>
            <div className="properties-container">
              {properties.length > 0 ? (
                properties.map((property) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                    className="property-card"
                  />
                ))
              ) : (
                <p>No properties found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerYourProperties;
