import mongoose from "mongoose";

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(MONGO_URI, options)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(() => console.log("Failed to connect to MongoDB"));
