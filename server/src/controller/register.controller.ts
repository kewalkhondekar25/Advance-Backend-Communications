import express from "express";

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