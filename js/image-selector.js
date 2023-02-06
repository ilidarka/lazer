/******* */

function init() {
	document.getElementById("clickMe1").addEventListener('mouseover', function() {
		document.getElementById("lazer-display1").style.display = "block";
        document.getElementById("clickMe1").classList.add('selected');
        document.getElementById("clickMe2").classList.remove('selected');
        document.getElementById("clickMe3").classList.remove('selected');
        document.getElementById("clickMe4").classList.remove('selected');
		document.getElementById("lazer-display3").style.display = "none";
		document.getElementById("lazer-display4").style.display = "none";
		document.getElementById("lazer-display2").style.display = "none";
	});

	document.getElementById("clickMe2").addEventListener('mouseover', function() {
		document.getElementById("lazer-display2").style.display ="block";
        document.getElementById("clickMe2").classList.add('selected');
        document.getElementById("clickMe1").classList.remove('selected');
        document.getElementById("clickMe3").classList.remove('selected');
        document.getElementById("clickMe4").classList.remove('selected');
		document.getElementById("lazer-display1").style.display ="none";
		document.getElementById("lazer-display3").style.display ="none";
		document.getElementById("lazer-display4").style.display ="none";
	
	});

	document.getElementById("clickMe3").addEventListener('mouseover', function() {
		document.getElementById("lazer-display3").style.display ="block";
        document.getElementById("clickMe3").classList.add('selected');
        document.getElementById("clickMe1").classList.remove('selected');
        document.getElementById("clickMe2").classList.remove('selected');
        document.getElementById("clickMe4").classList.remove('selected');
		document.getElementById("lazer-display1").style.display ="none";
		document.getElementById("lazer-display4").style.display ="none";
		document.getElementById("lazer-display2").style.display ="none";
	});

	document.getElementById("clickMe4").addEventListener('mouseover', function() {
		document.getElementById("lazer-display4").style.display ="block";
        document.getElementById("clickMe4").classList.add('selected');
        document.getElementById("clickMe1").classList.remove('selected');
        document.getElementById("clickMe2").classList.remove('selected');
        document.getElementById("clickMe3").classList.remove('selected');
		document.getElementById("lazer-display1").style.display ="none";
		document.getElementById("lazer-display3").style.display ="none";
		document.getElementById("lazer-display2").style.display ="none";
	});
}
init();

