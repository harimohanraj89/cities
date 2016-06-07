Strategy.Refinery = function(opt) {
  this.name = "Refinery";
  this.time = 0;
  this.position = {
    row: opt.row,
    col: opt.col
  };

  this.generationAmount = 10;
  this.generationInterval = 2000;
  this.player = opt.player;
};

Strategy.Refinery.cost = 100;

Strategy.Refinery.prototype.size = { row: 2, col: 2 };

Strategy.Refinery.prototype.tick = function(time) {
  this.time += time;
  while (this.time > this.generationInterval) {
    this.time -= this.generationInterval;
    this.generate();
  }
};

Strategy.Refinery.prototype.generate = function() {
  this.player.creditGold(this.generationAmount);
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
