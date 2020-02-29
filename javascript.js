$("#Topazscore").on("click", function() {
	var number = Math.floor((Math.random() * Tnumbers.length));
	$("#Topaznumber").text(Tnumbers[number])
})

var Tnumbers = ["5", "7", "8", "9", "10","2","4"]

$("#Rubyscore").on("click", function() {
	var number = Math.floor((Math.random() * Rnumbers.length));
	$("#Rubynumber").text(Rnumbers[number])
})
var Rnumbers = ["1", "7", "8", "6", "0","2","4"]

$("#Emeraldscore").on("click", function() {
	var number = Math.floor((Math.random() * Enumbers.length));
	$("#Emeraldnumber").text(Enumbers[number])
})

var Enumbers = ["3", "7", "8", "9", "1","2","5"]

$("#Diamondscore").on("click", function() {
	var number = Math.floor((Math.random() * Dnumbers.length));
	$("#Dinumber").text(Dnumbers[number])
})

var Dnumbers = ["5", "7", "3", "9", "10","6","8"]