// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById('myButton')

button.addEventListener('click', function () {
  var blueBoxes = document.getElementsByClassName('box')
  for (var i = 0, l = blueBoxes.length; i < l; i++) {
    blueBoxes[i].style.backgroundColor = 'blue'
  }
})
