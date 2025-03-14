import startLogger from "./log";
import { games } from "./store";

const main = () => {

  setInterval(() => {
    games.push({
      id: (Math.floor(Math.random() * 90) + 10).toString(),
      whiteArmyPlayerName: "guinever beck",
      blackArmyPlayerName: "michale jackson",
      moves: [
        { 
          whiteMoves: (Math.floor(Math.random() * 64) + 1).toString(),
          blackMoves: (Math.floor(Math.random() * 64) + 1).toString()
        }
      ]
    })
  }, 3000);
  startLogger();
};

main();