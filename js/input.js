Strategy.MouseInput = function(opts) {
  this.canvas = opts.canvas;
  this.camera = opts.camera;
  this.map = opts.map;


  this.canvas.addEventListener('click', function(e) {
    var cellCoordinates = this.cellCoordinates(e);
    Strategy.BuildingFactory.create({
      player: Strategy.player,
      building: Strategy.Refinery,
      map: this.map,
      row: cellCoordinates.row,
      col: cellCoordinates.col
    });
  }.bind(this));
};

Strategy.MouseInput.prototype.cellCoordinates = function(e) {
  var absoluteCoordinates = this.absoluteCoordinates(e);
  return ({
    row: Math.floor(absoluteCoordinates.x / this.map.cellSize * 2),
    col: Math.floor(absoluteCoordinates.y / this.map.cellSize * 2)
  });
};

Strategy.MouseInput.prototype.absoluteCoordinates = function(e) {
  var viewportCoordinates = this.viewportCoordinates(e);
  return ({
    x: this.camera.x/2 + viewportCoordinates.x,
    y: this.camera.y/2 + viewportCoordinates.y,
  });
};

Strategy.MouseInput.prototype.viewportCoordinates = function(e) {
  var x;
  var y;
  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  }
  else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= this.canvas.offsetLeft;
  y -= this.canvas.offsetTop;

  return ({
    x: x,
    y: y
  });
};

var keyboardInput = function(e) {
  var handled = false;
  switch(e.which) {
  case 37:
    Strategy.camera.x -= Strategy.camera.speed;
    handled = true;
    break;
  case 38:
    Strategy.camera.y -= Strategy.camera.speed;
    handled = true;
    break;
  case 39:
    Strategy.camera.x += Strategy.camera.speed;
    handled = true;
    break;
  case 40:
    Strategy.camera.y += Strategy.camera.speed;
    handled = true;
    break;
  }

  if (handled) {
    e.preventDefault();
  }
};
