import React from "react";
import { NavLink } from "react-router-dom";

const SellerMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Seller Panel</h4>
          <NavLink
            to="/dashboard/seller/properties"
            className="list-group-item list-group-item-action"
          >
            Your Properties
          </NavLink>
          <NavLink
            to="/dashboard/seller/add-property"
            className="list-group-item list-group-item-action"
          >
            Add New Property
          </NavLink>
          <NavLink
            to="/dashboard/seller/update-properties"
            className="list-group-item list-group-item-action"
          >
            Update Properties
          </NavLink>
          <NavLink
            to="/dashboard/seller/delete-properties"
            className="list-group-item list-group-item-action"
          >
            Delete Properties
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SellerMenu;
