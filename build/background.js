chrome.browserAction.onClicked.addListener(function() {
  var color;
  color = localStorage['color'] ? localStorage['color'] : "red";
  return chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='" + color + "'"
  });
});
