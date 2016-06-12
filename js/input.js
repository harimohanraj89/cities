Strategy.mouseInput = function(e) {
  var cell = e.target;

  Strategy.BuildingFactory.create({
    player: Strategy.player,
    building: Strategy.Refinery,
    map: Strategy.map,
    row: parseInt(cell.dataset.row),
    col: parseInt(cell.dataset.col)
  });
};

Strategy.keyboardInput = function(e) {
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
