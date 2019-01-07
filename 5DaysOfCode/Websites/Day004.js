// [17 March 2018]
// Day 4: Generating a random background color

function changeBG() {
  var r = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);

  var hex = rgb2hex(r, g, b);
  document.body.style.background = hex;
}

function rgb2hex(r, g, b) {
  // transparency values in hex
  var col = ["00", "0D", "1A", "26", "33", "40", "4D", "59", "66", "73", "80",
            "8C", "99", "A6", "B3", "BF", "CC", "D9", "E6", "F2", "FF"];

  var s1 = ("0" + r.toString(16)).slice(-2); // change to base 16
  var s2 = ("0" + g.toString(16)).slice(-2);
  var s3 = ("0" + b.toString(16)).slice(-2);
  return "#" + s1 + s2 + s3;
}
