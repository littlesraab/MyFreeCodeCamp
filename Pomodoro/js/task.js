$btime = $("#btime");
$stime = $("#stime");
$status = $('#status');
$min = $("#min");
$sec = $("#sec");

var start = false;

var addzero = function(target) {
	target = "00" + target;
	return target.slice(-2);
};

$("#bplus").click(function() {	
	var btemp = $btime.text();

	if(start === false && btemp > 0 && btemp < 60) {
		$btime.text(addzero(parseInt($btime.text(), 10)+1));
		if($status.text() === "Have a Break") {
			$min.text($btime.text());
			$sec.text(addzero(0));
		};
	}
});

$("#bminus").click(function() {	
	var btemp = $btime.text();	
	if(start === false && btemp > 1 && btemp < 61) {
		$btime.text(addzero(parseInt($btime.text(), 10)-1));
		if($status.text() === "Have a Break") {
			$min.text($btime.text());
			$sec.text(addzero(0));
		};
	}
});

$("#splus").click(function() {	
	var stemp = $stime.text();
		
	if(start === false && stemp > 0 && stemp < 60) {
		$stime.text(addzero(parseInt($stime.text(), 10)+1));
		if($status.text() === "Get To Work") {
			$min.text($stime.text());
			$sec.text(addzero(0));
		};
	}
});

$("#sminus").click(function() {	
	var stemp = $stime.text();	
	if(start === false && stemp > 1 && stemp < 61) {
		$stime.text(addzero(parseInt($stime.text(), 10)-1));
		if($status.text() === "Get To Work") {
			$min.text($stime.text());
			$sec.text(addzero(0));
		};
	}
});

var timeid;
var count = 0;

var clockstart = function() {
	timeid = setInterval(update, 1000);
    start = true;
    update(); 
      
};

var clockstop = function() {
    clearInterval(timeid);
    timeid = null;
    start = false;
    
};


var update = function() {
	var minutes = +$min.text();
	var seconds = +$sec.text();
	if (start === true ) {
		if(minutes === 0 && seconds === 0) {
			if($status.text() === "Get To Work") {
				$status.text("Have a Break");
				$min.text($btime.text());
			}else if($status.text() === "Have a Break") {
				$status.text("Get To Work");
				$min.text($stime.text());
			}
		};

		if(seconds === 0) {
			$sec.text(59);
			$min.text(addzero(parseInt($min.text(), 10)-1));
		};

		if (seconds > 0) {
			$sec.text(addzero(parseInt($sec.text(), 10)-1));
		};
	};
};

 $('#pause').click(function() {
    clockstop();
    $("#start").removeClass("disabled");
 });

$("#start").click(function() {
	clockstart();
	$("#start").addClass("disabled");
});

