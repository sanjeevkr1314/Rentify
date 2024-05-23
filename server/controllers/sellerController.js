import Property from "../models/propertyModel.js";
import User from "../models/userModel.js";

export const addNewPropertyController = async (req, res) => {
  try {
    const propertyDetails = req.body;
    // console.log(propertyDetails);
    const owner = await User.findById(propertyDetails.ownerId);
    const property = new Property({
      name: propertyDetails.name,
      price: propertyDetails.price,
      area: propertyDetails.area,
      address: propertyDetails.address,
      city: propertyDetails.city,
      state: propertyDetails.state,
      country: propertyDetails.country,
      zip: propertyDetails.zip,
      image: propertyDetails.image,
      numberOfBedrooms: propertyDetails.numberOfBedrooms,
      numberOfBathrooms: propertyDetails.numberOfBathrooms,
      nearbyHospital: propertyDetails.nearbyHospital,
      nearbyCollege: propertyDetails.nearbyCollege,
      owner: propertyDetails.ownerId,
      ownerEmail: owner.ownerEmail,
    });
    await property.save();
    res.status(201).json({
      message: "Property added successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const getAllOwnedPropertiesController = async (req, res) => {
  try {
    const userId = req.params.id;
    const properties = await Property.find({ owner: userId });
    // console.log(properties);
    res.status(200).json({
      success: true,
      message: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching properties",
      error,
    });
  }
};

export const getPropertyByIdController = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    res.status(200).json({
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updatePropertyController = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    const { propertyDetails } = req.body;
    property.name = propertyDetails.name;
    property.price = propertyDetails.price;
    property.area = propertyDetails.area;
    property.address = propertyDetails.address;
    property.city = propertyDetails.city;
    property.state = propertyDetails.state;
    property.country = propertyDetails.country;
    property.zip = propertyDetails.zip;
    property.image = propertyDetails.image;
    property.numberOfBedrooms = propertyDetails.numberOfBedrooms;
    property.numberOfBathrooms = propertyDetails.numberOfBathrooms;
    property.nearbyHospital = propertyDetails.nearbyHospital;
    property.nearbyCollege = propertyDetails.nearbyCollege;
    await property.save();
    res.status(200).json({
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deletePropertyController = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    await property.remove();
    res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
