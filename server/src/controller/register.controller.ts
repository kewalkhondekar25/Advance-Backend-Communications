import express from "express";
import {Queue} from "bullmq";

console.log(process.env.AIVEN_HOST);
const emailQueue = new Queue("email-queue", {
  connection: {
    host: process.env.AIVEN_HOST,
    port: parseInt(process.env.AIVEN_PORT),
    username: process.env.AIVEN_USER,
    password: process.env.AIVEN_PASSWORD
  }
});

const register = async (req: express.Request, res: express.Response) => {
  try {
    const {userName, userEmail} = req.body;

    if(!(userName && userEmail)){
      return res.status(500).json({
        message: "username & email required"
      })
    }
    // await new Promise<void>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 2000);
    // })
    await emailQueue.add(`${Date.now()}`, {
      from: "meeting@nodejs.dev",
      to: userEmail
    })
    return res.status(200).json({
      message: "Registration Successful. You will recieve Invite Email soon",
      name: userName,
      emai: userEmail
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export {register};