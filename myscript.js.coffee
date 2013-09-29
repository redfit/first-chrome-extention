colors = document.getElementsByName('colors')

document.getElementById('save').onclick = ->
  return localStorage["color"] = color.value for color in colors when color.checked

document.body.onload = ->
  switch localStorage['color']
    when "red" then colors[0].checked = true
    when "green" then colors[2].checked = true
    when "blue" then colors[3].checked = true
    else console.log "invalid color"

