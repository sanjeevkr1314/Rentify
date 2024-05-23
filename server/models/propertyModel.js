import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  numberOfBedrooms: {
    type: Number,
    required: true,
  },
  numberOfBathrooms: {
    type: Number,
    required: true,
  },
  nearbyHospital: {
    type: String,
    required: true,
  },
  nearbyCollege: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  likedCount: {
    type: Number,
    default: 0,
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
