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

  //singleton pattern
  private static instance: GameStore;// Holds the single instance
  private constructor(){// Private constructor prevents direct instantiation
    this.games = [];
  };

  static getInstance(){
    //it creates a single instance of game manager & returns it from inside
    // const store = new GameStore();
    if(GameStore.instance){
      return GameStore.instance
    };
    GameStore.instance = new GameStore();
    return GameStore.instance
  }

  addMove(id: string, whiteArmyPlayerName: string, blackArmyPlayerName: string, whiteMoves: string, blackMoves: string){
    this.games.push({ id, whiteArmyPlayerName, blackArmyPlayerName, moves: [{ whiteMoves, blackMoves}]})
  };

  log(){
    console.log(JSON.stringify(this.games, null, 2));
  };
};

//singleton
export const gameStore = GameStore.getInstance();

export const store = new GameStore();