import { games } from "./store";

const startLogger = () => {
  
  setInterval(() => {
    console.log(JSON.stringify(games, null, 2));
  }, 2000);

};

export default startLogger;