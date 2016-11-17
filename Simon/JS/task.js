var queue = [],
	player = [],
	round,
	strict = false,
	start = false,
	lock = false,
	speed = 800,
	win;

var audio1 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
	audio2 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
	audio3 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
	audio4 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
	audiow = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

var onoff = function() {	
	$('.ctrlb').toggleClass('fleft fright');
	if($(".ctrlb").hasClass("fright")) {
		$(".titles").addClass("pointer");
		$(".strictb").addClass("pointer");
		$(".startb").addClass("pointer");		
		start = true;
		round = 0;
		update();
	}else {	
		$(".titles").removeClass("pointer");
		$(".strictb").removeClass("pointer");
		$(".startb").removeClass("pointer");
		$(".strictb").removeClass("bright");
		$("#strict").removeClass("redt");
		rstart();		
		start =false;
		strict = false;
		round = "";
		update();		
	}
};

var update = function() {
	if(start === true) {
		$(".round").text(("00" + round).slice(-2));
	}else {
		$(".round").text(round);
	}
};

var rstart = function() {
	$(".startb").removeClass("bright");
	$("#start").text("Start");
	lock = false;
	round = 0;
	queue = [];
	player = [];
	update();
};

var starton = function() {
	if (start === true) {
		$(".startb").toggleClass("bright");
		if($(".startb").hasClass("bright")) {
			$("#start").text("Reset");
			lock = true;
			newround();
		}else {
			$("#start").text("Start");
			$("#strict").removeClass("redt");
			rstart();
		}
	};
};

var stricton = function() {
	if(start === true && lock === false) {
		if(!$(".strictb").hasClass("bright")) {
			$(".strictb").addClass("bright");
			$("#strict").addClass("redt");
			strict = true;
		}else {
			$(".strictb").removeClass("bright");
			$("#strict").removeClass("redt");
			strict = false;
		}
	}
};

var getnum = function(number) {
	return Math.floor(Math.random() * number) + 1;
};

var animate = function() {
	var i = 0;

	var time = setInterval(function() {
		light(queue[i]);

		i++
		if (i > queue.length) {
      		clearInterval(time);
    	}
	}, speed);
};

var music = function(num) {
	switch(num) {
		case "audio1" :
			audio1.play();
			break;
		case "audio2" :
			audio2.play();
			break;
		case "audio3" :
			audio3.play();
			break;
		case "audio4" :
			audio4.play();
			break;
		case "audiow" :
			audiow.play();
			break;
	}
};

var light = function(target) {
	var a = "audio" + target;

	music(a);

	var $title = $('[data-title=' + target + ']').addClass('bright');
	
	window.setTimeout(function() {
		$title.removeClass("bright");
	}, speed / 2); 
};

var newround = function() {
	var num = getnum(4);

	queue.push(num);
	player = [];

	if(round >= 4) {
		speed = 600;
	};

	if(round >= 8) {
		speed = 400;
	};

	if (round >= 12) {
		speed = 200;
	};

	round++;
	update();
	animate();
};

var strictopen = function() {
	if(strict === true) {
		win = false;
		over();
		rstart();
	}else {
		player = [];
		animate();
	}
};

var over = function() {
	if (win === true) {
		onoff();
		$(".buttons").removeClass("hidden");
		$(".result").html("You win!");
	}else {
		round = "";
		update();
		onoff();
		start = false;
		$(".buttons").removeClass("hidden");
		$(".result").html("You lose...");
	};
};

var play = function() {
	if(start === true && lock === true) {
		var p = $(this).data("title");
		player.push(p);
		if(player[player.length - 1] !== queue[player.length - 1]) {
			music("audiow");
			strictopen();
		}else {
			var a = "audio" + $(this).data("title");
			music(a);

			if(queue.length === player.length) {
				if(round === 20) {
					win = true;
					over();
				}else {
					newround();
				}
			}
		}
	}
};


$(".button1").on("click",function() {
	onoff();
	$(".buttons").addClass("hidden");
	$(".result").html("Welcome!");
});

$(".button2").on("click",function() {
	round = "";
	update();
	$(".buttons").addClass("hidden");
	$(".result").html("Welcome!");
});

$(".ctrlb").on("click", onoff);

$(".startb").on("click", starton);

$(".strictb").on("click", stricton);

$(".titles").on("click", play);
$(".titles").on("mousedown", function() {
	if(start === true && lock === true) {
		$(this).addClass('bright');
	}
});
$(".titles").on("mouseup", function() {
	if(start === true && lock === true) {
		$(this).removeClass('bright');
	}
});
