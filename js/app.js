var Strategy = {};
var canvas, ctx;

var player = {
  name: 'JimBob',
  gold: 100,
  buildings: [],
  tick: function(dt) {
    this.buildings.forEach(function(building) {
      building.tick(dt);
    });
  },
  build: function(Building, row, col) {
    var building;
    if (player.gold < Building.cost) {
      alert('Not enough gold');
      return false;
    }

    player.gold -= Building.cost;
    building = new Building({ row: row, col: col, player: this });
    this.buildings.push(building);
    return true;
  },
  creditGold: function(amount) {
    this.gold += amount;
  }
};

window.onload = function() {
  Strategy.map = new Strategy.Map({
    rows: 100,
    cols: 100
  });
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  window.addEventListener('keydown', keyboardInput);
  window.requestAnimationFrame(draw);

  player.build(Strategy.Refinery, 2, 3);

  var getNow = function() { return (new Date()).getTime() };
  var time = getNow();
  setInterval(function() {
    var now = getNow();
    var dt = now - time;
    time = now;
    player.tick(dt);
  }, 100);
};
