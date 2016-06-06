var keyboardInput = function(e) {
  switch(e.which) {
  case 37:
    Strategy.camera.x -= Strategy.camera.speed;
    break;
  case 38:
    Strategy.camera.y -= Strategy.camera.speed;
    break;
  case 39:
    Strategy.camera.x += Strategy.camera.speed;
    break;
  case 40:
    Strategy.camera.y += Strategy.camera.speed;
    break;
  }
};
