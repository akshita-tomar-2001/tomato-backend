import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./Routes/foodRoute.js";
import userRouter from "./Routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRouter.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// API Endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static("Uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


