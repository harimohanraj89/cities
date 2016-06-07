Strategy.Map = function(opt) {
  opt = opt || {};
  this._rows = opt.rows || 10;
  this._cols = opt.cols || 10;
  this.grid = [];
  for (var i = 0; i < this._rows; i++) {
    var row = [];
    for (var j = 0; j < this._cols; j++) {
      row.push({
        row: i,
        col: j,
        size: 100,
        occupied: false
      });
    }
    this.grid.push(row);
  }
};

Strategy.Map.prototype.get = function(row, col) {
  if (!this.outOfBounds(row, col)) {
    return _.clone(this.grid[row][col]);
  }
};

Strategy.Map.prototype.rows = function() {
  return this._rows;
};

Strategy.Map.prototype.cols = function() {
  return this._cols;
};

Strategy.Map.prototype.outOfBounds = function(row, col) {
  return (row < 0) || (col < 0) || (row >= this.rows()) || (col >= this.cols());
};

Strategy.Map.prototype.occupied = function(row, col) {
  if (!this.outOfBounds(row, col)) {
    return this.get(row, col).occupied;
  }
};

Strategy.Map.prototype.occupy = function(row, col) {
  if (!this.outOfBounds(row, col)) {
    this.grid[row][col].occupied = true;
  }
};
