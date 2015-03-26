(function() {
  if (typeof window.S === "undefined") {
    window.S = {};
  }

  var View = S.View = function(board, $el) {
    this.board = board;
    this.el = $el;
  };

  View.prototype.setupBoard = function() {
    var $grid = $("<div class='grid'></div>");
    for (var j = 0; j < board.size; j++) {
      var $row = $("<div class='row'></div>");
      for (var i = 0; i < this.board.size; i++) {
        var $square = $("<div class='square'></div>");
        $square.attr('data-row', i);
        $square.attr('data-col', j);
        $row.append($square);
      }
      $grid.append($row);
    }

    this.el.append($grid);
  };

  View.prototype.segmentPositions = function() {
    var snakeSegments = this.board.snake.segments;
    var segmentPositions = [];
    for (var i = 0; i < snakeSegments.length; i++) {
      segmentPositions.push(snakeSegments[i].coord);
    }
    return segmentPositions;
  };

  View.prototype.renderSnake = function() {
    this.refresh();
    var positions = this.segmentPositions();
    for (var i = 0; i < positions.length; i++) {
      var $square = $("[data-row=" + positions[i][0] + "][data-col=" + positions[i][1] + "]");
      $square.css('background-color', 'cornflowerblue');
      console.log(positions[i]);
    }
  };

  View.prototype.refresh = function() {
    var $squares = $(".square");
    $squares.css('background-color', 'lightgray');
  };

  View.prototype.update = function() {
    this.board.update();
  };


  View.prototype.bindEvents = function() {
    var view = this;
    key('left', function() {
      view.board.snake.segments[0].dir = "left";
    });

    key('right', function() {
      view.board.snake.segments[0].dir = "right";
    });

    key('up', function() {
      view.board.snake.segments[0].dir = "up";
    });

    key('down', function() {
      view.board.snake.segments[0].dir = "down";
    });
  };
})();
