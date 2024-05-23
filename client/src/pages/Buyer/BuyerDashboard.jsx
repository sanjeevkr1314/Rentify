import React, { useEffect } from "react";
import { useAuth } from "../../context/auth.jsx";
import BuyerMenu from "../../components/Layout/BuyerMenu.jsx";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
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
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>
                {" "}
                Buyer Name : {auth?.user?.fName}
                {auth?.user?.lName}
              </h3>
              <h3> Buyer Email : {auth?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerDashboard;
