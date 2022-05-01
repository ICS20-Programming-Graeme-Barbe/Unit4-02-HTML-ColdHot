// Created by Graeme
// Created on: April 30
// JS functions for index.html


// This function tells the user if the temp is hot or cold
'use strict';
function submit() {
	// Declares variable
	let userTemp = document.getElementById('temp').value
	
	// If statement for user guess, hot or cold 
	if (userTemp == "") {
		document.getElementById('hotCold').innerHTML = "You need to input the temperature";
	} else if (userTemp < 15) {
		//Tells user if it is hot or cold
		document.getElementById('hotCold').innerHTML = "It's cold out, you might want to wear a jacket.";
	} else {
		document.getElementById('hotCold').innerHTML = "It's hot out, no jacket needed today.";
		
	}
}