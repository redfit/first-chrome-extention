var colors;

colors = document.getElementsByName('colors');

document.getElementById('save').onclick = function() {
  var color, _i, _len;
  for (_i = 0, _len = colors.length; _i < _len; _i++) {
    color = colors[_i];
    if (color.checked) {
      return localStorage["color"] = color.value;
    }
  }
};

document.body.onload = function() {
  switch (localStorage['color']) {
    case "red":
      return colors[0].checked = true;
    case "green":
      return colors[2].checked = true;
    case "blue":
      return colors[3].checked = true;
    default:
      return console.log("invalid color");
  }
};
