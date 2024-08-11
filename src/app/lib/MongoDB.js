import mongoose from "mongoose";

export default async () => {
  try {
    console.log(
      "dbName2:",
      process.env.DB_NAME,
      "user:",
      process.env.DB_USERNAME,
      "pass:",
      process.env.DB_PASSWORD,
      "authSource:",
      process.env.DB_AUTHSOURCE
    );

    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      authSource: process.env.DB_AUTHSOURCE,
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    };
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("MongoDb Error : ", error);
  }
};
