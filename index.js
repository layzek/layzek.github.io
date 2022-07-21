var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');

var speed1 = parseInt(document.getElementById('medidor1').value); 
var time1 = (110 / speed1) * 1000; // ms
var seconds1 = (time1/1000).toFixed(2);
$("#timer1").html("Tiempo que le tomaria al carro rojo a llegar al final: " + seconds1 + " segundos");

var speed2 = parseInt(document.getElementById('medidor2').value); 
var time2 = (70 / speed2) * 1000; // ms
var seconds2 = (time2/1000).toFixed(2);
$("#timer2").html("Tiempo que le tomaria al carro naranja a llegar al final: " + seconds2 + " segundos");

function cambioMedidor1(val) {
	document.getElementById('mostrarValor1').innerHTML = val + "m/s";
}
function cambioMedidor2(val) {
	document.getElementById('mostrarValor2').innerHTML = val + "m/s";
}


let keyframes1 = [
	{
		transform: 'translateX(0)',
	},
	{
		transform: 'translateX(1100px)',
	}
];


let keyframes2 = [
	{
		transform: 'translateX(0)',
	},
	{
		transform: 'translateX(700px)',
	}
];


document.getElementById('play').addEventListener('click', function() { 
	var speed1 = parseInt(document.getElementById('medidor1').value); 
	var time1 = (110 / speed1) * 1000; // ms
	var seconds1 = (time1/1000).toFixed(2);
	$("#timer1").html("Tiempo que le tomaria al carro rojo a llegar al final: " + seconds1 + " segundos");

	var speed2 = parseInt(document.getElementById('medidor2').value); 
	var time2 = (70 / speed2) * 1000; // ms
	var seconds2 = (time2/1000).toFixed(2);
	$("#timer2").html("Tiempo que le tomaria al carro naranja a llegar al final: " + seconds2 + " segundos");

	let animation1 = box1.animate(keyframes1,{
		duration: time1,
		fill: 'both'
	})
	let animation2 = box2.animate(keyframes2,{
		duration: time2,
		fill: 'both'
	});
	animation1.play();
	animation1.addEventListener('finish', () => {
		animation2.pause();
	});
	animation2.play();
	animation2.addEventListener('finish', () => {
		animation1.pause();
	});
});


setInterval(function () {
		$("#distanceRed").html("Distancia carro rojo: " + ((($("#box1").position().left)/10).toFixed(2)));
		$("#distanceOrange").html(" Distancia carro naranja: " + (($("#box2").position().left)/10).toFixed(2));
		}, 100);

