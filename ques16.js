function question16() {
  var foods = ["rice", "pizza", "sandwich", "rolls"];
  foods.pop();
  foods.push("cake");
  foods.splice(0,1);
  document.getElementById('ques16').innerHTML ="<h3>"+ "after change : "+"["+ foods+"]"+"</h3>";
}
