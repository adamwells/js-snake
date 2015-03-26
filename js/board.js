(function() {
  if (typeof window.S === "undefined") {
    window.S = {};
  }

  var Board = S.Board = function () {
    this.snake = new S.Snake();
    this.setupBoard();
    this.size = 10;
  };

  Board.prototype.setupBoard = function () {
    this.grid = [];
    for (var i = 0; i < this.size; i++) {
      this.grid.push([]);
      for (var j = 0; j < this.size; j++) {
        this.grid[i].push(['.']);
      }
    }
    return this.grid;
  };

  Board.prototype.placeSnake = function() {
    for (var i = 0; i < this.snake.length(); i++) {
      var x = this.snake.segments[i].coord[0];
      var y = this.snake.segments[i].coord[1];

      this.grid[y][x] = ['S'];
    }
  };

  Board.prototype.render = function () {
    for (var i = 0; i < this.grid.length; i++) {
      var line = "";
      for (var j = 0; j < this.grid[0].length; j++) {
        line += this.grid[i][j];
      }
      console.log(line);
    }
  };

  Board.prototype.update = function() {
    this.setupBoard();
    this.snake.move();

    this.placeSnake();
    this.render();
  };
}());
