var draw = function() {
  drawHud(Strategy.player);
  window.requestAnimationFrame(draw);
};

var drawHud = function(player) {
  document.getElementById('player-name').innerHTML = player.name;
  document.getElementById('player-gold').innerHTML = player.gold;
};

var drawHtmlMap = function(map) {
  var table = document.getElementById("table");
  for (var row = 0, rows = map.rows(); row < rows; row++) {
    var tr = document.createElement("tr");
    for (var col = 0, cols = map.cols(); col < cols; col++) {
      var td = document.createElement("td");
      td.id = "map-" + row + "-" + col;
      td.classList.add("map-cell");
      td.dataset.row = row;
      td.dataset.col = col;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};

var drawBuilding = function(building, map) {
  var row = building.getRow();
  var col = building.getCol();

  var rows = building.size.row;
  var cols = building.size.col;

  for(var r = row; r < row + rows; r++) {
    for(var c = col; c < col + cols; c++) {
      var cell = document.getElementById("map-" + r + "-" + c);
      cell.classList.add(building.slug);
    }
  }
};
