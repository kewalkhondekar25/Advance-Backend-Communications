import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });
import { emailWorker } from "./queue/emailQueue";


console.log("email-queue started");

emailWorker;
