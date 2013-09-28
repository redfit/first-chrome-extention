var changeColor;

changeColor = function(color) {
  return chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='" + color + "'"
  });
};

document.getElementById('red').onclick = function() {
  return changeColor('red');
};

document.getElementById('yellow').onclick = function() {
  return changeColor('yellow');
};
