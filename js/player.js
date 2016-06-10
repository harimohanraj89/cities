Strategy.Player = function(opts) {
  this.name = opts.name;
  this.gold = opts.gold;
  this.buildings = [];
};

Strategy.Player.prototype.tick = function(dt) {
  this.buildings.forEach(function(building) {
    building.tick(dt);
  });
};

Strategy.Player.prototype.creditGold = function(amount) {
  this.gold += amount;
};
