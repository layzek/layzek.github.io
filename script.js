var style = document.createElement('style');
style.innerHTML = '#myContainer { width: 525px; height: 75px; position: relative; background: #fffdd0; } #myAnimation1 { width: 25px; height: 25px; bottom: 0px; left: 0px; position: absolute; background: red; border-radius: 50%;  border: 1px solid #000; } #myAnimation2 { width: 25px; height: 25px; bottom: 0px; left: 175px; position: absolute; background: green; border-radius: 50%;  border: 1px solid #000; }';
document.getElementsByTagName('head')[0].appendChild(style);

var divTimer = document.createElement('div');
divTimer.id = 'timer';
divTimer.innerHTML = '0';
document.getElementsByTagName('body')[0].appendChild(divTimer);

var inputValue1 = document.createElement('input');
inputValue1.id = 'value1';
inputValue1.type = 'number';
inputValue1.value = '0';
var inputValue2 = document.createElement('input');
inputValue2.id = 'value2';
inputValue2.type = 'number';
inputValue2.value = '0';
document.getElementsByTagName('body')[0].appendChild(inputValue1);
document.getElementsByTagName('body')[0].appendChild(inputValue2);

var buttonStart = document.createElement('button');
buttonStart.id = 'startMRU';
buttonStart.innerHTML = '->';
buttonStart.onclick = myMove;
document.getElementsByTagName('body')[0].appendChild(buttonStart);

var myContainer = document.createElement('div');
myContainer.id = 'myContainer';
document.getElementsByTagName('body')[0].appendChild(myContainer);

var myAnimation1 = document.createElement('div');
myAnimation1.id = 'myAnimation1';
var myAnimation2 = document.createElement('div');
myAnimation2.id = 'myAnimation2';
myContainer.appendChild(myAnimation1);
myContainer.appendChild(myAnimation2);

var id = null;  
var b = window.getComputedStyle(myContainer, null).width;
var b1 = window.getComputedStyle(myAnimation1, null).width;
var c = parseInt(b.replace("px",""));
var c1 = parseInt(b1.replace("px",""));
var d = c - c1;

function myMove(){
  var value1 = parseFloat(inputValue1.value);
  var value2 = parseFloat(inputValue2.value);
  var pos1 = parseInt(window.getComputedStyle(myAnimation1, null).left.replace('px', ''));
  var pos2 = parseInt(window.getComputedStyle(myAnimation2, null).left.replace('px', ''));
  divTimer.innerHTML = 0;
  clearInterval(id);
  id = setInterval(frame, 1000);
  function frame() {
    if (pos1 + value1 >= d & pos2 + value2 >= d) {
      myAnimation1.style.left = d + 'px';
      myAnimation2.style.left = d + 'px';
      clearInterval(id);
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)-d));
    } 
    else if (pos1 + value1 >= d) {
      myAnimation1.style.left = d + 'px';
      pos2 = pos2 + value2;
      myAnimation2.style.left = pos2.toFixed(2) + 'px';
      clearInterval(id); 
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)-d));           
    }
    else if (pos2 + value2 >= d) {
      myAnimation2.style.left = d + 'px';
      pos1 = pos1 + value1; 
      myAnimation1.style.left = pos1.toFixed(2) + 'px'; 
      clearInterval(id); 
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)-d));           
    }
    else {
      pos1 = pos1 + value1; 
      pos2 = pos2 + value2;
      divTimer.innerHTML++;
      myAnimation1.style.left = pos1.toFixed(2) + 'px'; 
      myAnimation2.style.left = pos2.toFixed(2) + 'px';
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)-d));
    }
  }
}

