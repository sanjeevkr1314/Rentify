import React, { useEffect } from "react";
import SellerMenu from "../../components/Layout/SellerMenu.jsx";
import { useAuth } from "../../context/auth.jsx";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const [auth] = useAuth();

  const navigate = useNavigate();
  const isBuyer = auth?.user?.buyer;

  useEffect(() => {
    if (isBuyer) navigate("/dashboard/seller");
    if (!auth?.token) navigate("/login");
  }, [auth?.token, isBuyer]);

  return (
    <>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3 adminPanel">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>
                {" "}
                Seller Name : {auth?.user?.fName}
                {auth?.user?.lName}
              </h3>
              <h3> Seller Email : {auth?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
