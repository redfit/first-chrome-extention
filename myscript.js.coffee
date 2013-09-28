changeColor = (color) ->
  chrome.tabs.executeScript null,
    "code": "document.body.style.backgroundColor='#{color}'"

document.getElementById('red').onclick = ->
  changeColor 'red'

document.getElementById('yellow').onclick = ->
  changeColor 'yellow'
