function question13_1() {
  var numberList = window.prompt("Enter Your Numbers divided by '/' : ");
  const num = numberList.split("/");
      var i = 0;
      var max = 0;
      let count = num.length;
      while (i < count) {
          if (num[i]>max) {
            max=num[i];
          }
          i++;
      }
      document.getElementById("max").innerHTML= max;
    }
    function question13_2() {
      var numberList = window.prompt("Enter Your Numbers divided by '/' : ");
      const num = numberList.split("/");
      var i = 0;
      var min = num[0];
      let count = num.length;
      while (i < count) {
          if (num[i]<min) {
            min=num[i];
          }
          i++;
      }
      document.getElementById("min").innerHTML= min;
    }
