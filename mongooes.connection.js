import mongoose from "mongoose";
const mongoURL="mongodb+srv://root:root@cluster0.fryz3qk.mongodb.net/smart-farming?retryWrites=true&w=majority";
const localURL="mongodb://127.0.0.1:27017/smart-farming";
mongoose
  .connect(localURL)
  .then(() => {
    console.log("Connect Successful");
  })
  .catch((e) => {
    console.log(e);
  });

export default mongoose;
