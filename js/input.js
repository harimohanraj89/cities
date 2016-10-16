Strategy.Input = function() {
  this.factory = null;
};

Strategy.Input.prototype.selectBuilding = function(e) {
  var factory = e.target;
  var building = Strategy.Registry.buildings[factory.dataset.building];
  if (building) {
    this.factory = building;
  }
};

Strategy.Input.prototype.selectedBuilding = function() {
  if (this.factory) {
    return this.factory.slug;
  } else {
    return "";
  }
};

Strategy.Input.prototype.clickMap = function(e) {
  var cell = e.target;

  Strategy.BuildingFactory.create({
    player: Strategy.player,
    building: Strategy.Refinery,
    map: Strategy.map,
    row: parseInt(cell.dataset.row),
    col: parseInt(cell.dataset.col)
  });
};

Strategy.Input.prototype.keyboardInput = function(e) {
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

Strategy.input = new Strategy.Input;

Strategy.clickMap = Strategy.input.clickMap.bind(Strategy.input);
Strategy.keyboardInput = Strategy.input.keyboardInput.bind(Strategy.input);
Strategy.selectBuilding = Strategy.input.selectBuilding.bind(Strategy.input);
