class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = 0;
    this.matrix = new Array();
    this._isFinished = false;
    this.countFreeFields = 0;

    for (let i = 0; i < 3; i += 1) {
      this.matrix[i] = new Array();
      for (let j = 0; j < 3; j += 1) {
        this.matrix[i][j] = null;
        this.countFreeFields++;
      }
    }
  }

  getCurrentPlayerSymbol() {
    return !this.currentPlayerSymbol ? 'x' : 'o';
  }

  nextTurn(rowIndex, columnIndex) {

    if (this.matrix[rowIndex][columnIndex] !== null) {
      return;
    }

    // set matrix cell value
    this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

    // decrease number of countTurns
    this.countFreeFields--;

    // check available turns
    if (this.noMoreTurns()) {
      this._isFinished = true;
    }

    // check winner
    if (this.getWinner() !== null) {
      this._isFinished = true;
    }

    // change currentPlayerSymbol
    this.currentPlayerSymbol = !this.currentPlayerSymbol ? 1 : 0;
  }

  isFinished() {
    return this._isFinished;
  }

  getWinner() {

    let winner = null,
        horResult = false,
        vertResult = false,
        matrix = this.matrix;

    // check horResult result
    matrix.map(function (cell) {
      if (cell[0] !== null && cell[0] == cell[1] && cell[0] == cell[2]) {
        winner = cell[0];
        horResult = true;
      }
    });

    // check vertResult result
    if (!horResult) {
      matrix[0].forEach(function (cell, i) {
        if (cell !== null && cell == matrix[1][i] && cell == matrix[2][i]) {
          winner = cell;
          vertResult = true;
        }
      });
    }

    // check diagResult result
    if (!horResult && !vertResult) {
      if (matrix[0][0] !== null && matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) {
        winner = matrix[0][0];
      }
      if (matrix[0][2] !== null && matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0]) {
        winner = matrix[0][2];
      }
    }

    return winner;
  }

  noMoreTurns() {
    return this.countFreeFields <= 0 ? true : false;
  }

  isDraw() {
    return (this.getWinner() == null && this.noMoreTurns()) ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
