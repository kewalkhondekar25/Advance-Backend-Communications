import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Nodejs Redis implementation"
  })
});

app.post("/submit", async (req, res) => {

  const { userId, problemId, codeSnippet, language } = req.body;

  try {
    await client.lPush("submission", JSON.stringify({ userId, problemId, codeSnippet, language }));
    res.status(200).json({
      message: "Submission Pending"
    });
  } catch (error) {
    console.log(error);
  }
});

const main = async () => {
  try {
    await client.connect();
    console.log("Connected to redis!!!");

    app.listen(8080, () => {
      console.log("server is listening on PORT: 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

main();