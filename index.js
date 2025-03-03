import express from "express";
import productsRouter from "./routes/products.js";

// create an express app
const app = express();

// Use route
app.use(productsRouter);

// listen for incoming request
app.listen(3000, () => {
  console.log("Server listens to port 3000");
});
