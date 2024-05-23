import Property from "../models/propertyModel.js";

export const getAllPropertiesController = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json({
      properties,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const likePropertyController = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    property.likedCount = req.body.likedCount;
    await property.save();
    res.status(200).json({
      message: "Property liked successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error
    });
  }
};
