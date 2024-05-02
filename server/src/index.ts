import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/register.routes";

dotenv.config({path: "../.env"});

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from server"
  })
});

app.use("/api/v1", router)

app.listen(port, () => {  
  console.log(`server is listening on port: ${port}`);
});