import { store } from "./store";

const startLogger = () => {
  
  setInterval(() => {
    console.log(store.log());
  }, 2000);

};

export default startLogger;