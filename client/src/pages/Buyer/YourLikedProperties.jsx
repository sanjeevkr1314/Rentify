import React from "react";
import { useAuth } from "../../context/auth.jsx";
import BuyerMenu from "../../components/Layout/BuyerMenu.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const YourLikedProperties = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const isBuyer = auth?.user?.buyer;

  useEffect(() => {
    if (!isBuyer) navigate("/dashboard/buyer");
    if (!auth?.token) navigate("/login");
  }, [auth?.token, isBuyer]);

  return (
    <>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3 adminPanel">
            <BuyerMenu />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </>
  );
};

export default YourLikedProperties;
