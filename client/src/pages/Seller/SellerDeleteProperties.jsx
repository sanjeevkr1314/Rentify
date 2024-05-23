import React, { useEffect, useState } from "react";
import SellerMenu from "../../components/Layout/SellerMenu.jsx";
import { useAuth } from "../../context/auth.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellerDeleteProperties = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const isBuyer = auth?.user?.buyer;
  const [properties, setProperties] = useState([]);

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

  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/seller/property/${propertyId}`,
        {
          headers: { Authorization: auth.token },
        }
      );
      setProperties(
        properties.filter((property) => property._id !== propertyId)
      );
      alert("Property deleted successfully");
    } catch (error) {
      console.error("Error deleting property", error);
      alert("Error deleting property");
    }
  };

  return (
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3 adminPanel">
          <SellerMenu />
        </div>
        <div className="col-md-9">
          <h2>Delete Properties</h2>
          {properties.length > 0 ? (
            <div className="property-list">
              {properties.map((property) => (
                <div key={property._id} className="property-item">
                  <h4>{property.name}</h4>
                  <p>{property.address}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(property._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No properties found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDeleteProperties;
