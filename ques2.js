function question2() {
  var num1 = window.prompt("Enter Your Number 1 : ");
  num1=parseInt(num1);
  var num2 = window.prompt("Enter Your Number 2 : ");
  num2=parseInt(num2);
  var addNum = num1 + num2;
  var multiNum = num1 * num2;
  var subtracNum = num1 - num2;
  var divideNum = num1 / num2;


document.getElementById('addNum').innerHTML = "<h3>"+ "The addition of the two numbers is "+ addNum +"<br>";
document.getElementById('multiNum').innerHTML = "<h3>" +"The multiplication of the two numbers is "+ multiNum +"<br>";
document.getElementById('subtracNum').innerHTML = "<h3>" +"The subtraction of the two numbers is "+ subtracNum +"<br>";
document.getElementById('divideNum').innerHTML = "<h3>" +"The division of the two numbers is "+ divideNum +"<br>";
}
