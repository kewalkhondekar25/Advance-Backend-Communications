import express from "express";

const register = (req: express.Request, res: express.Response) => {
  try {
    const {userName, userEmail} = req.body;
    console.log("registering");
    res.status(200).json({
      message: "register successfully",
      name: userName,
      emai: userEmail
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export {register};