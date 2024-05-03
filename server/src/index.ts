import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });
import { router } from "./routes/register.routes";

console.log(__dirname)
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