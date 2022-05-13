/* jshint esversion: 6 */

var style = document.createElement('style');
style.innerHTML = '#myContainer { width: 400px; height: 100px; position: relative; background: #fffdd0;} #myAnimation { width: 50px; height: 50px; left: 0px; position: absolute; background: red; } #myAnimation2 { width: 50px; height: 50px; bottom: 0px; position: absolute; background: green; }';
document.getElementsByTagName('head')[0].appendChild(style);

var a = document.getElementById("myContainer");
var a1 = document.getElementById("myAnimation");
var b = window.getComputedStyle(a, null).width;
var b1 = window.getComputedStyle(a1, null).width;
var c = parseInt(b.replace("px",""));
var c1 = parseInt(b1.replace("px",""));
var d = c - c1;

var id = null;
function myMove() {
  var elem1 = document.getElementById("myAnimation");   
  var elem2 = document.getElementById("myAnimation2");
  var elem3 = document.getElementById("timer");
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var pos1 = 0;
  var pos2 = 0;
  var timer = 0; 
  clearInterval(id);
  id = setInterval(frame, 1000);
  function frame() {
    if (pos1 > d || pos2 > d) {
      clearInterval(id);
    } else {
      pos1 = pos1 + value1; 
      pos2 = pos2 + value2;
      timer++;
      elem1.style.left = pos1.toFixed(2) + 'px'; 
      elem2.style.left = pos2.toFixed(2) + 'px';
      elem3.innerHTML = timer; 
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)-d));
    }
  }
}