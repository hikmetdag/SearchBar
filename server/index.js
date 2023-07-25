import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);

app.get("/", (req, res) => res.send("bismillah"));
app.listen(port, 5000);