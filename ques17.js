function question17() {
  const fruits = ["apple"];
  fruits.unshift("Pineapple","Lemon");
  fruits.push("orange","Peach");
  document.getElementById('ques17').innerHTML = "Created array - " + "[" + fruits + "]";
}
