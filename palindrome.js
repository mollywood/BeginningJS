var tb = document.getElementById("nameTextBox")
var btn = document.getElementById("btnClickMe")
var h1 = document.getElementById("heading1")

console.log(h1)

btn.addEventListener('click', function() {
  h1.innerHTML = tb.value
  palindromeCheck(tb.value)
})
console.log(tb)

function palindromeCheck(str) {
  var re = /[^A-Za-z0-9]/g
  str = str.toLowerCase().replace(re, '')
  var len = str.length
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true
}

//Not sure how to print this to the html
