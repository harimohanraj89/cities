var Strategy = {};
var canvas, ctx;

var player;
var playerData = {
  name: 'JimBob',
  gold: 100
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

  player = new Strategy.Player(playerData);

  Strategy.BuildingFactory.create({
    player: player,
    building: Strategy.Refinery,
    map: Strategy.map,
    row: 2,
    col: 3
  });

  var getNow = function() { return (new Date()).getTime(); };
  var time = getNow();
  setInterval(function() {
    var now = getNow();
    var dt = now - time;
    time = now;
    player.tick(dt);
  }, 100);
};
