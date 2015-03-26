(function () {
  if (typeof window.S === "undefined") {
    window.S = {};
  }

  var Snake = S.Snake = function() {
    this.dir = "down";
    this.segments = [new Segment([0, 0], this.dir)];
  };

  Snake.prototype.move = function() {
    for (var i = 0; i < this.segments.length; i++) {
      this.segments[i].move();
    }

    for (var j = this.segments.length - 1; j > 0; j--) {
      this.segments[j].dir = this.segments[j - 1].dir;
    }
  };

  Snake.prototype.length = function() {
    return this.segments.length;
  };

  var Segment = S.Segment = function(coord, dir) {
    this.coord = coord;
    this.dir = dir;
  };

  Segment.prototype.move = function() {
    switch(this.dir) {
      case "up": {
        this.coord[1] -= 1;
        break;
      }
      case "down": {
        this.coord[1] += 1;
        break;
      }
      case "left": {
        this.coord[0] -= 1;
        break;
      }
      case "right": {
        this.coord[0] += 1;
        break;
      }
    }
  };


}());
