var Strategy = {};

window.onload = function() {
  Strategy.map = new Strategy.Map({
    rows: 100,
    cols: 100
  });

  Strategy.player = new Strategy.Player({
    name: 'JimBob',
    gold: 200
  });

  drawHtmlMap(Strategy.map);

  window.addEventListener('keydown', Strategy.keyboardInput);
  window.addEventListener('buildingCreated', function(e) {
    drawBuilding(e.detail);
  });

  document.getElementById('table').addEventListener('click', function(e) {
    if(e.target.classList.contains('map-cell')) {
      Strategy.mouseInput(e);
    }
  });

  Strategy.BuildingFactory.create({
    player: Strategy.player,
    building: Strategy.Refinery,
    map: Strategy.map,
    row: 2,
    col: 3
  });

  window.requestAnimationFrame(draw);
  var getNow = function() { return (new Date()).getTime(); };
  var time = getNow();
  setInterval(function() {
    var now = getNow();
    var dt = now - time;
    time = now;
    Strategy.player.tick(dt);
  }, 100);
};
