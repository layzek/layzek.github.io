/*jshint esversion: 6 */ 

let time = 0;
let pos1 = parseInt(window.getComputedStyle(myAnimation1, null).left.replace('px', ''));
let pos2 = parseInt(window.getComputedStyle(myAnimation2, null).left.replace('px', ''));
let id = null;  
let maxSpace = parseInt(window.getComputedStyle(myContainer, null).width.replace("px","")) - parseInt(window.getComputedStyle(myAnimation1, null).width.replace("px",""));

document.getElementById('timer').innerHTML = time;
document.getElementById('startMRU').onclick = function myMove() {

  clearInterval(id);
  id = setInterval(frame, 1000);
  let value1 = parseFloat(document.getElementById('value1').value);
  let value2 = parseFloat(document.getElementById('value2').value);

  function frame() {
    ifCollide();
    if (pos1 + value1 >= maxSpace & pos2 + value2 >= maxSpace) {
      myAnimation1.style.left = maxSpace + 'px';
      myAnimation2.style.left = maxSpace + 'px';
      clearInterval(id);
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)- maxSpace));
    } 
    else if (pos1 + value1 >= maxSpace) {
      myAnimation1.style.left = maxSpace + 'px';
      pos2 = pos2 + value2;
      myAnimation2.style.left = pos2.toFixed(2) + 'px';
      clearInterval(id); 
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)- maxSpace));           
    }
    else if (pos2 + value2 >= maxSpace) {
      myAnimation2.style.left = maxSpace + 'px';
      pos1 = pos1 + value1; 
      myAnimation1.style.left = pos1.toFixed(2) + 'px'; 
      clearInterval(id); 
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)- maxSpace));           
    }
    else {
      pos1 = pos1 + value1; 
      pos2 = pos2 + value2;
      time++;
      document.getElementById('timer').innerHTML = time;
      myAnimation1.style.left = pos1.toFixed(2) + 'px'; 
      myAnimation2.style.left = pos2.toFixed(2) + 'px';
      console.log(pos1.toFixed(2), pos2.toFixed(2), Math.abs(pos1.toFixed(2)- maxSpace));
    }
    function ifCollide () {
      if (pos1 == pos2) {
      clearInterval(id);
      myAnimation1.style.background = '#ffd700';
      myAnimation2.style.background = '#ffd700';

    }
  }
  }
};
