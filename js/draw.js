var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRelative(function() {
    drawMap(Strategy.map);
    player.buildings.forEach(function(building) {
      drawBuilding(building, Strategy.map);
    });
  }, Strategy.camera);

  drawAbsolute(function() {
    drawHud(player);
  });

  window.requestAnimationFrame(draw);
};

var drawRelative = function(fxn, camera) {
  ctx.save();
  ctx.translate(-camera.x, -camera.y);
  fxn();
  ctx.restore();
};

var drawAbsolute = function(fxn) {
  fxn();
}

var drawMap = function(map) {
  for (var row = 0, rows = map.rows(); row < rows; row++) {
    for (var col = 0, cols = map.cols(); col < cols; col++) {
      var cell = map.get(row, col);
      var x = cell.row * cell.size;
      var y = cell.col * cell.size;
      ctx.strokeRect(x, y, cell.size, cell.size);
      ctx.font = "16px Arial";
      ctx.fillText(cell.row + ', ' + cell.col, x + cell.size/2, y + cell.size/2);
    }
  }
};

var drawHud = function(player) {
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, 40);
  ctx.font = "32px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(player.name + " | " + player.gold, 0, 36);
  ctx.restore();
}

var drawBuilding = function(building, map) {
  ctx.save();
  ctx.fillStyle = "#7c7";
  var cell = map.get(building.getRow(), building.getCol());
  var x = cell.row * cell.size;
  var y = cell.col * cell.size;
  ctx.fillRect(x, y, cell.size * building.size.row, cell.size * building.size.col);
  ctx.restore();
  ctx.fillStyle = "#000";
  ctx.font = "24px Arial";
  ctx.fillText(building.getName(), x + 4, y + cell.size/2);
};
