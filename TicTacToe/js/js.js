var player,ai,current;
var over = false;
var lock = false;
var move = 0;
var foa;

var selico = function() {

	if ($(this).attr("id") === "X" && !lock) {
		player = "X";
		ai = "O";
		lock = true;		
	}else if($(this).attr("id") === "O" && !lock) {
		player = "O";
		ai = "X";
		lock = true;
	};

	$("#F").removeClass("disabled");
	$("#A").removeClass("disabled");
};

var selfoa = function() {
	if ($(this).attr("id") === "F") {
		foa = "F";
		current = player;
		$("#F").addClass("disabled");
		$("#A").addClass("disabled");
	}else if($(this).attr("id") === "A") {
		foa = "A";
		current = ai;
		$("#F").addClass("disabled");
		$("#A").addClass("disabled");
	}

	if (current === ai) {
		aimove();
		move++;
		toggle(current);
	};
	
	$(".area").removeClass("nostart");
	$(".area").addClass("start");	
};


	


var marks = function() {
	if (player !== undefined) {
		lock = true;
	
		var id = $(this).attr("id");

		if(!$("#" + id).hasClass("clicked")) {
			$("#" + id).addClass("clicked");
			draw(id);
			move++;
			check();
			
			toggle(current);
		
			if(over === false) {
				aimove();
				move++;
				
				check();				
				toggle(current);
			
			}
		}
	}
};

var toggle = function(target) {
	target === player ? current = ai : current = player;
};


var draw = function(id) {
	$("#" + id).html("<p class = 'icon'>" + current + "</p>")
};

var check = function() {
	alert(move);
	switch(true) {
		case $("#1").text() === current && $("#2").text() === current && $("#3").text() === current:
			line("#1", "#2", "#3");
			over = true;
			cleaner();
			break;
		case $("#4").text() === current && $("#5").text() === current && $("#6").text() === current:
			line("#4", "#5", "#6");
			over = true;
			cleaner();
			break;
		case $("#7").text() === current && $("#8").text() === current && $("#9").text() === current:
			line("#7", "#8", "#9");
			over = true;
			cleaner();
			break;
		case $("#1").text() === current && $("#4").text() === current && $("#7").text() === current:
			line("#1", "#4", "#7");
			over = true;
			cleaner();
			break;
		case $("#2").text() === current && $("#5").text() === current && $("#8").text() === current:
			line("#2", "#5", "#8");
			over = true;
			cleaner();
			break;
		case $("#3").text() === current && $("#6").text() === current && $("#9").text() === current:
			line("#3", "#6", "#9");
			over = true;
			cleaner();
			break;
		case $("#1").text() === current && $("#5").text() === current && $("#9").text() === current:
			line("#1", "#5", "#9");
			over = true;
			cleaner();
			break;
		case $("#3").text() === current && $("#5").text() === current && $("#7").text() === current:
			line("#3", "#5", "#7");
			over = true;
			cleaner();
			break;
		case move === 9:
			over = true;
			cleaner();
			break;
	}
};

var line = function(id1,id2,id3) {
	var $id1 = $(id1);
	var $id2 = $(id2);
	var $id3 = $(id3);

	$id1.removeClass("start");
	$id2.removeClass("start");
	$id3.removeClass("start");
	$id1.addClass("win");
	$id2.addClass("win");
	$id3.addClass("win");
};

var cleaner = function() {

	if(move >= 9 || over === true) {
		
		setTimeout(clean, 1000);
	}

};

var clean = function() {
	$(".area").empty();
	$(".area").removeClass("clicked");
	$("div").removeClass("win");

	move = 0;
	over = false;
	lock = false;

	current = undefined;
	player = undefined;
	ai = undefined;
	$(".area").removeClass("start");
	$(".area").addClass("nostart");

};

var aimove = function() {

	switch(true) {
			case $('#5').text() !== player && $('#5').text() !== ai:
				draw('5');
      				$("#5").addClass("clicked");
      				break;
			case $('#1').text() === ai &&  $('#2').text() === ai && $('#3').text() !== ai && $('#3').text() !== player:
				draw('3');
      			$("#3").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#3').text() === ai && $('#2').text() !== ai && $('#2').text() !== player:
				draw('2');
      			$("#2").addClass("clicked");
				break;
			case $('#2').text() === ai &&  $('#3').text() === ai && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#4').text() === ai && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#7').text() === ai && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#7').text() === ai && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;
			case $('#3').text() === ai &&  $('#6').text() === ai && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#3').text() === ai &&  $('#9').text() === ai && $('#6').text() !== ai && $('#6').text() !== player:
				draw('6');
      			$("#6").addClass("clicked");
				break;
			case $('#7').text() === ai &&  $('#8').text() === ai && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#7').text() === ai &&  $('#9').text() === ai && $('#8').text() !== ai && $('#8').text() !== player:
				draw('8');
      			$("#8").addClass("clicked");
				break;
			case $('#8').text() === ai &&  $('#9').text() === ai && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#5').text() === ai && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#1').text() === ai &&  $('#9').text() === ai && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === ai &&  $('#9').text() === ai && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#3').text() === ai &&  $('#5').text() === ai && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#3').text() === ai &&  $('#7').text() === ai && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === ai &&  $('#7').text() === ai && $('#3').text() !== ai && $('#3').text() !== player:
				draw('3');
      			$("#3").addClass("clicked");
				break;
			case $('#2').text() === ai &&  $('#5').text() === ai && $('#8').text() !== ai && $('#8').text() !== player:
				draw('8');
      			$("#8").addClass("clicked");
				break;
			case $('#2').text() === ai &&  $('#8').text() === ai && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === ai &&  $('#8').text() === ai && $('#2').text() !== ai && $('#2').text() !== player:
				draw('2');
      			$("#2").addClass("clicked");
				break;
			case $('#4').text() === ai &&  $('#5').text() === ai && $('#6').text() !== ai && $('#6').text() !== player:
				draw('6');
      			$("#6").addClass("clicked");
				break;
			case $('#4').text() === ai &&  $('#6').text() === ai && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === ai &&  $('#6').text() === ai && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#2').text() === player && $('#3').text() !== ai && $('#3').text() !== player:
				draw('3');
      			$("#3").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#3').text() === player && $('#2').text() !== ai && $('#2').text() !== player:
				draw('2');
      			$("#2").addClass("clicked");
				break;
			case $('#2').text() === player &&  $('#3').text() === player && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#4').text() === player && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#7').text() === player && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#7').text() === player && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;
			case $('#3').text() === player &&  $('#6').text() === player && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#3').text() === player &&  $('#9').text() === player && $('#6').text() !== ai && $('#6').text() !== player:
				draw('6');
      			$("#6").addClass("clicked");
				break;
			case $('#7').text() === player &&  $('#8').text() === player && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#7').text() === player &&  $('#9').text() === player && $('#8').text() !== ai && $('#8').text() !== player:
				draw('8');
      			$("#8").addClass("clicked");
				break;
			case $('#8').text() === player &&  $('#9').text() === player && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#5').text() === player && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#1').text() === player &&  $('#9').text() === player && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === player &&  $('#9').text() === player && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#3').text() === player &&  $('#5').text() === player && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#3').text() === player &&  $('#7').text() === player && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === player &&  $('#7').text() === player && $('#3').text() !== ai && $('#3').text() !== player:
				draw('3');
      			$("#3").addClass("clicked");
				break;
			case $('#2').text() === player &&  $('#5').text() === player && $('#8').text() !== ai && $('#8').text() !== player:
				draw('8');
      			$("#8").addClass("clicked");
				break;
			case $('#2').text() === player &&  $('#8').text() === player && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === player &&  $('#8').text() === player && $('#2').text() !== ai && $('#2').text() !== player:
				draw('2');
      			$("#2").addClass("clicked");
				break;
			case $('#4').text() === player &&  $('#5').text() === player && $('#6').text() !== ai && $('#6').text() !== player:
				draw('6');
      			$("#6").addClass("clicked");
				break;
			case $('#4').text() === player &&  $('#6').text() === player && $('#5').text() !== ai && $('#5').text() !== player:
				draw('5');
      			$("#5").addClass("clicked");
				break;
			case $('#5').text() === player &&  $('#6').text() === player && $('#4').text() !== ai && $('#4').text() !== player:
				draw('4');
      			$("#4").addClass("clicked");
				break;						
			case $('#1').text() === player && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#2').text() === player && $('#7').text() !== ai && $('#7').text() !== player:
				draw('7');
      			$("#7").addClass("clicked");
				break;
			case $('#3').text() === player && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#6').text() === player && $('#1').text() !== ai && $('#1').text() !== player:
				draw('1');
      			$("#1").addClass("clicked");
				break;
			case $('#9').text() === player && $('#3').text() !== ai && $('#3').text() !== player:
				draw('3');
      			$("#3").addClass("clicked");
				break;
			case $('#7').text() === player && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
			case $('#4').text() === player && $('#9').text() !== ai && $('#9').text() !== player:
				draw('9');
      			$("#9").addClass("clicked");
				break;
    		case $('#1').text() !== player && $('#1').text() !== ai:
      			draw('1');
      			$("#1").addClass("clicked");
      			break;
    		case $('#3').text() !== player && $('#3').text() !== ai:
      			draw('3');
      			$("#3").addClass("clicked");
      			break;
    		case $('#7').text() !== player && $('#7').text() !== ai:
      			draw('7');
      			$("#7").addClass("clicked");
      			break;
    		case $('#9').text() !== player && $('#9').text() !== ai:
      			draw('9');
      			$("#9").addClass("clicked");
     			break;
    		case $('#2').text() !== player && $('#2').text() !== ai:
      			draw('2');
      			$("#2").addClass("clicked");
      			break;
    		case $('#4').text() !== player && $('#4').text() !== ai:
      			draw('4');
      			$("#4").addClass("clicked");
      			break;
    		case $('#6').text() !== player && $('#6').text() !== ai:
      			draw('6');
      			$("#6").addClass("clicked");
      			break;
    		case $('#8').text() !== player && $('#8').text() !== ai:
      			draw('8');
      			$("#8").addClass("clicked");
     			 break;
				
	}
};

$(".mark").on("click", selico);

$(".mark2").on("click", selfoa);

$(".area").on('click', marks);