import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";

// Make database connection

await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// Use global middlewares
app.use(express.json());

// Use route
app.use(productsRouter);

// listen for incoming request
app.listen(3000, () => {
  console.log("Server listens to port 3000");
});
