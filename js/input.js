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
