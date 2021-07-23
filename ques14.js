function question14() {
  const fruits = ["apple","bannana"];
  var i = 1;
  while(i<=5){
     addFruits = window.prompt("Enter fruit name : ");
      fruits.splice(1,0,addFruits);
      i++;
  }
  document.getElementById('ques14_1').innerHTML="<h3>"+"3rd index of array : " + fruits[3]+"</h3>";
  document.getElementById('ques14_2').innerHTML="<h3>"+"length of the array : " + fruits.length +"</h3>";
  document.getElementById('ques14_3').innerHTML="<h3>"+"reverse order of elements of fruits :" + "[" +  fruits.reverse()+ "</h3>";
}
