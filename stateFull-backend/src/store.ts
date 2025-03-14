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