import React from "react";
import { NavLink } from "react-router-dom";

const BuyerMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Buyer Panel</h4>
          <NavLink
            to="/dashboard/buyer/liked-properties"
            className="list-group-item list-group-item-action"
          >
            Your Liked Properties
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BuyerMenu;
