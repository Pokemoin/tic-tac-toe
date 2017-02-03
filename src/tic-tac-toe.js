class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = 0;
    this.table = new Array();

    for (let i = 0; i < 3; i += 1) {
      this.table[i] = new Array();
      for (let j = 0; j < 3; j += 1) {
        this.table[i][j] = null;
      }
    }
  }

  getCurrentPlayerSymbol() {
    return !this.currentPlayerSymbol ? 'x' : 'o';
  }

  nextTurn(rowIndex, columnIndex) {

    if (this.table[rowIndex][columnIndex] !== null) {
      return;
    }

    this.table[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

    this.currentPlayerSymbol = !this.currentPlayerSymbol ? 1 : 0;
  }

  isFinished() {
    console.log('isFinished');
  }

  getWinner() {
    console.log('getWinner');


  }

  noMoreTurns() {
    console.log('noMoreTurns');
  }

  isDraw() {
    console.log('isDraw');
  }

  getFieldValue(rowIndex, colIndex) {
    return this.table[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
