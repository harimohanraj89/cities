Strategy.Refinery = function(opt) {
  this.name = "Refinery";
  this.position = {
    row: opt.row,
    col: opt.col
  };

  this.goldGenerationRate = 10;
  this.player = opt.player;
};

Strategy.Refinery.cost = 100;

Strategy.Refinery.prototype.generate = function() {
  this.player.creditGold(this.goldGenerationRate);
};

Strategy.Refinery.prototype.getName = function() {
  return this.name;
};

Strategy.Refinery.prototype.getRow = function() {
  return this.position.row;
};

Strategy.Refinery.prototype.getCol = function() {
  return this.position.col;
};
