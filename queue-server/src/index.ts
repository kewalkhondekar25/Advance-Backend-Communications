import { emailWorker } from "./queue/emailQueue";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

console.log("email-queue started");

emailWorker;
