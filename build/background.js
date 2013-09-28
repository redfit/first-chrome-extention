chrome.browserAction.onClicked.addListener(function() {
  return chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='green'"
  });
});
