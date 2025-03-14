import startLogger from "./log";
import { store } from "./store";

const main = () => {

  setInterval(() => {
    
  const id = (Math.floor(Math.random() * 90) + 10).toString();
  const whiteArmyPlayerName = "guinever beck";
  const blackArmyPlayerName = "michale jackson";
  const whiteMoves = (Math.floor(Math.random() * 64) + 1).toString();
  const blackMoves = (Math.floor(Math.random() * 64) + 1).toString();

    store.addMove(id, whiteArmyPlayerName, blackArmyPlayerName, whiteMoves, blackMoves);
    // games.push({
    //   id: (Math.floor(Math.random() * 90) + 10).toString(),
    //   whiteArmyPlayerName: "guinever beck",
    //   blackArmyPlayerName: "michale jackson",
    //   moves: [
    //     { 
    //       whiteMoves: (Math.floor(Math.random() * 64) + 1).toString(),
    //       blackMoves: (Math.floor(Math.random() * 64) + 1).toString()
    //     }
    //   ]
    // })
  }, 3000);
  startLogger();
};

main();