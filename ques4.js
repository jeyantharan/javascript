function question4() {
    var length = window.prompt("Enter Your length : ");
    var width = window.prompt("Enter Your width : ");
    var height = window.prompt("Enter Your height : ");
    var volume = length * width * height ;
    document.getElementById('ques4').innerHTML= "<h3>"+"volume of a cuboid is "+ volume+"<br>";
}
