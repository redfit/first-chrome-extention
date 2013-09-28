chrome.browserAction.onClicked.addListener ->
  chrome.tabs.executeScript null,
    "code": "document.body.style.backgroundColor='green'"

