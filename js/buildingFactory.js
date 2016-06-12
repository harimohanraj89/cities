Strategy.BuildingFactory = function(opts) {
  this.player = opts.player;
  this.building = opts.building;
  this.map = opts.map;
  this.row = opts.row;
  this.col = opts.col;
};

Strategy.BuildingFactory.create = function(opts) {
  return (new Strategy.BuildingFactory(opts).create());
};

Strategy.BuildingFactory.prototype.create = function() {
  if(this.goldAvailable() && this.spaceAvailable()) {
    var buildingInstance = this.createBuilding();
    this.debitGold();
    this.occupySpace();
    this.notify(buildingInstance);
    return true;
  }

  return false;
};

Strategy.BuildingFactory.prototype.notify = function(building) {
  var buildingCreated = new CustomEvent('buildingCreated', { 'detail': building });
  dispatchEvent(buildingCreated);
};

Strategy.BuildingFactory.prototype.goldAvailable = function() {
  return this.player.gold >= this.building.cost;
};

Strategy.BuildingFactory.prototype.spaceAvailable = function() {
  for (var row = this.row; row < this.row + this.building.size.row; row++) {
    for (var col = this.col; col < this.col + this.building.size.col; col++) {
      if (this.map.get(row, col).occupied) {
        return false;
      }
    }
  }

  return true;
};

Strategy.BuildingFactory.prototype.createBuilding = function() {
  building = new this.building({ row: this.row, col: this.col, player: this.player });
  this.player.buildings.push(building);
  return building;
};

Strategy.BuildingFactory.prototype.debitGold = function() {
  this.player.gold -= this.building.cost;
};

Strategy.BuildingFactory.prototype.occupySpace = function() {
  for (var row = this.row; row < this.row + this.building.size.row; row++) {
    for (var col = this.col; col < this.col + this.building.size.col; col++) {
      this.map.occupy(row, col);
    }
  }
};
