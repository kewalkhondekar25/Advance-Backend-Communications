import {Worker} from "bullmq";

export const emailWorker = new Worker("email-queue", async (job) => {
  console.log("sending email");
  console.log(`queue_id: ${job.id}`);
  console.log("queue_data", job.data);  
}, {
  connection: {
    host: process.env.AIVEN_HOST,
    port: parseInt(process.env.AIVEN_PORT),
    username: process.env.AIVEN_USER,
    password: process.env.AIVEN_PASSWORD
  }
})