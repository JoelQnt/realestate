import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDatatbase from "./connectDatabase.js";
import {
  signUp,
  signIn,
  google,
  signOut,
} from "./controllers/authcontroller.js";
import {
  deleteUser,
  getUser,
  getUserListing,
  updateUser,
} from "./controllers/userController.js";
import { verifyToken } from "./utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "./controllers/listingController.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/auth/signup", signUp);
app.post("/api/auth/signin", signIn);
app.post("/api/auth/google", google);
app.post("/api/user/update/:id", verifyToken, updateUser);
app.delete("/api/user/delete/:id", verifyToken, deleteUser);
app.get("/api/auth/signout", signOut);
app.post("/api/listing/create", verifyToken, createListing);
app.get("/api/user/listings/:id", verifyToken, getUserListing);
app.delete("/api/user/listing/delete/:id", verifyToken, deleteListing);
app.post("/api/listing/update/:id", verifyToken, updateListing);
app.get("/api/listing/get/:id", getListing);
app.get("/api/user/:id", verifyToken, getUser);
app.get("/api/listing/get", getListings);

app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

connectDatatbase();
