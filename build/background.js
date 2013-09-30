chrome.contextMenus.create({
  "title": "「%s」をTwitterで検索",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": function(info) {
    var url;
    url = "https://twitter.com/search?q=" + (encodeURIComponent(info.selectionText));
    return chrome.tabs.create({
      url: url
    });
  }
});
