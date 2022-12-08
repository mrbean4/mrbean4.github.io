
//Just unit conversion
function toRadians(degrees) {
	return degrees * Math.PI / 180;
}

function toDegrees(radians) {
	return radians * 180 / Math.PI;
}

//Round to two decimal places
function roundHundreth(rounded){
    return Math.round(100 * rounded) / 100;
}


function computePerformance(){

var speed = $("#speed").val();
var gForce = $("#gForce").val(); 
var bAng = toDegrees(Math.acos(1/gForce));



//From this point on the fomulas are a very specific varity of aerodynamic black magic from various flight textbooks.
//I fear that the dark forces that produced these mathmatical incantations may soon come to reclaim what 
//I have taken from them in adapting their creations into code. 

//Speed in knots squared
var speed2 =  Math.pow(speed, 2);
//bankAngleTangent
var bAngTan =  11.26 * Math.tan(toRadians(bAng));

//The rate the aircraft turns in degrees per second. 
var turnRate = roundHundreth(1091 * Math.tan(toRadians(bAng)) / speed);
//The diamater of the circle formed as the aircraft turns in feet.
var turnCircle = roundHundreth(speed2 / bAngTan);
//The time it takes the aircarft to complete a 360 degree turn in seconds.
var turnTime = roundHundreth(360 / turnRate);
//Above values again but in larger units.
var turnCircleMile = roundHundreth(turnCircle / 5280);
var turnTimeMinute = roundHundreth(turnTime / 60);
//This conludes the black magic.


//All those values in one sentace, no longer in use for display but gonna keep it around for easy debuging.
var allVals = "Turn circle radius in feet: " + turnCircle + ", Turn rate in degrees per second: " + turnRate + ", Turn time in seconds: " + turnTime + ".";
//console.log(allVals);




//Convert all the values to larger ones if needed then send all the values to the HTML for formating and display.
$('#bAngDis').text(roundHundreth(bAng) + " deg");
if(turnCircle < 5280){
	$('#turnCircle').text(turnCircle + " ft");

}else{
	$('#turnCircle').text(turnCircleMile + " mi");
}


$('#turnRate').text(turnRate + " deg/s");


if(turnTime < 60){
	$('#turnTime').text(turnTime + " s");

}else{
	$('#turnTime').text(turnTimeMinute + " min");
}
}
