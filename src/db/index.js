// import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log(`mongodb connection ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.log("MONGODB CONNECTION ERROR " + error);
//     console.log(`connection string ${process.env.MONGODB_URI}`);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
