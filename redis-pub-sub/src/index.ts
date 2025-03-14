import { PubSubManager } from "./pubSubManager";

setInterval(() => {
  PubSubManager.getInstance().userSubscribe(Math.random().toString(), "NVDIA");
  PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL")
}, 5000);