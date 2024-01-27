import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import users from "./data/user.js";
import User from "./models/userModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany({});

    await User.insertMany(users);

    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error importing user data: ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany({});

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error deleting user data: ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
