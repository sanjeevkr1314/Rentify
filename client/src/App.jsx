import { Route, Routes, Navigate } from "react-router-dom";
import LogIn from "./pages/Auth/LogIn.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";
import "./App.css";
import Register from "./pages/Auth/Register.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Header from "./components/Layout/Header.jsx";
import BuyerRoute from "./components/Routes/BuyerRoute.jsx";
import SellerRoute from "./components/Routes/SellerRoute.jsx";
import SellerDashboard from "./pages/Seller/SellerDashboard.jsx";
import SellerAddNewProperty from "./pages/Seller/SellerAddNewProperty.jsx";
import SellerYourProperties from "./pages/Seller/SellerYourProperties.jsx";
import SellerUpdateProperties from "./pages/Seller/SellerUpdateProperties.jsx";
import SellerDeleteProperties from "./pages/Seller/SellerDeleteProperties.jsx";
import BuyerDashboard from "./pages/Buyer/BuyerDashboard.jsx";
import YourLikedProperties from "./pages/Buyer/YourLikedProperties.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<SellerRoute />}>
          <Route path="seller" element={<SellerDashboard />} />
          <Route path="seller/properties" element={<SellerYourProperties />} />
          <Route
            path="seller/add-property"
            element={<SellerAddNewProperty />}
          />
          <Route
            path="seller/update-properties"
            element={<SellerUpdateProperties />}
          />
          <Route
            path="seller/delete-properties"
            element={<SellerDeleteProperties />}
          />
        </Route>
        <Route path="/dashboard" element={<BuyerRoute />}>
          <Route path="buyer" element={<BuyerDashboard />} />
          <Route
            path="buyer/liked-properties"
            element={<YourLikedProperties />}
          />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
