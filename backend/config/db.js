import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://tian:tian123@cluster0.k8v1g.mongodb.net/food-del")
    .then(() => {
      console.log("DB connected");
    });
};
