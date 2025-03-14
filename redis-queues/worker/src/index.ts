import { createClient } from "redis";

const client = createClient();

const main = async () => {
  try {
    
    await client.connect();
    console.log("Redis Connected!!!");
    console.log("Worker Processing");
    
    while(true){
      const response = await client.brPop("submission", 0);
      console.log(response);
      await new Promise((resolve, reject) => setTimeout(() => {
        if(true){
          resolve("submission passed")
        }else{
          reject("submission failed")
        }
      }, 1000)).then((res) => console.log(res)).catch(e => console.log(e))
    }
  } catch (error) {
    console.log(error);
  }
};

main();