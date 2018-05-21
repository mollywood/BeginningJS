
var firstNumberTextBox = document.getElementById("firstNumberTextBox")
var secondNumberTextBox = document.getElementById("secondNumberTextBox")
var operand = ""
var addButton = document.getElementById("addButton")
var subtractButton = document.getElementById("subtractButton")
var multiplyButton = document.getElementById("multiplyButton")
var divideButton = document.getElementById("divideButton")
var equalButton = document.getElementById("equalButton")

addButton.addEventListener('click',function(){
  operand = "+"
})

subtractButton.addEventListener('click', function(){
  operand = "-"
})

multiplyButton.addEventListener('click', function(){
  operand = "*"
})

divideButton.addEventListener('click', function(){
  operand = "/"
})

equalButton.addEventListener('click',function(){
   if(operand == "+") {
      // perform addition
      return (firstNumberTextBox + secondNumberTextBox)
      console.log (firstNumberTextBox + secondNumberTextBox)
   } else if(operand == "-") {
      // perform subtraction
      return (firstNumberTextBox - secondNumberTextBox)
   } else if(operand == "*") {
     // perform multiplication
     return (firstNumberTextBox * secondNumberTextBox)
   } else if(operand == "/") {
     //perform division
     return (firstNumberTextBox / secondNumberTextBox)
   }
})
