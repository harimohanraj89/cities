Strategy.camera = {
  x: 0,
  y: 0,
  speed: 100,
  pan: function(x, y) {
    this.x += x;
    this.y += y;
  }
};
