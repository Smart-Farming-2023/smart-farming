import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://root:root@cluster0.fryz3qk.mongodb.net/smart-farming?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connect Successful");
  })
  .catch((e) => {
    console.log(e);
  });

export default mongoose;
