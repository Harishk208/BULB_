var bulb = 0;
function findbulb() {
  if (bulb == 0) {
    document.getElementById("image").src = "floweron.jpg";
    bulb = 1;
  } else {
    document.getElementById("image").src = "floweroff.jpg";
    bulb = 0;
  }
}
