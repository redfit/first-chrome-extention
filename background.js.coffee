
chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  if tab.url.indexOf('dotinstall') isnt -1
    chrome.pageAction.show(tabId)

chrome.pageAction.onClicked.addListener ->
  chrome.tabs.executeScript null,
    "code": "document.body.style.backgroundColor='red'"

