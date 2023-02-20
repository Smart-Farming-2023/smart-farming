import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/smart-farming")
  .then(() => {
    console.log("Connect Successful");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose;
