interface ChessGame {
  id: string;
  whiteArmyPlayerName: string;
  blackArmyPlayerName: string;
  moves: [
    {
      whiteMoves: string,
      blackMoves: string,
    }
  ]
};

export const games: ChessGame[] = [];

export class GameStore {

  games: ChessGame[] = [];

  constructor(){
    this.games = [];
  };

  addMove(id: string, whiteArmyPlayerName: string, blackArmyPlayerName: string, whiteMoves: string, blackMoves: string){
    this.games.push({ id, whiteArmyPlayerName, blackArmyPlayerName, moves: [{ whiteMoves, blackMoves}]})
  };

  log(){
    console.log(JSON.stringify(this.games, null, 2));
  };
};

export const store = new GameStore();