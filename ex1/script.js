// Change the text of the h1 tag to "I have changed the text"

var idH1 = document.querySelector('h1')

document.querySelector('h1').onclick = function () {
  idH1.innerHTML = 'I have changed the text'
}
