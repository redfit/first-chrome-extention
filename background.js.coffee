chrome.browserAction.onClicked.addListener ->
  color = if localStorage['color'] then localStorage['color'] else "red"
  chrome.tabs.executeScript null,
    "code": "document.body.style.backgroundColor='#{color}'"

