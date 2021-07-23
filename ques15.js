function question15() {
const  num = [4,1,8,3,9,12];
const snum = num.sort (function (a,b) {return a-b})
document.getElementById('ques15').innerHTML = "<h3>"+"after sort :" + snum +"</h3>";
}
