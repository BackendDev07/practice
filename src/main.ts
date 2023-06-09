import express from "express";
import cors from "cors";
import productRoutes from "./route/product.routes";

// MVC = Model, View, Controller

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/product", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
