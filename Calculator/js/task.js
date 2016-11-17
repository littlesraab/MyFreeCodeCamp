var check =function() {
	var val = $('#text').val();
	if(val !== "" && val.substr(-1) !== "+" && val.substr(-1) !== "-" && val.substr(-1) !== "*" && val.substr(-1) !== "/" && val.substr(-1) !== "*" && val.substr(-1) !== ".") {
		return true;
	}else {
		return false;
	};
};

var check2 = function() {
	var val = $('#text').val();
	if( val.substr(-1) !== "+" && val.substr(-1) !== "-" && val.substr(-1) !== "*" && val.substr(-1) !== "/" && val.substr(-1) !== "*" && val.substr(-1) !== ".") {
		return true;
	}else {
		return false;
	};
};

var lock = false;
var temp;

$('#1').click(function() {
  	$('#text').val($('#text').val() + 1);
});

$('#2').click(function() {
  $('#text').val($('#text').val() + 2);
});

$('#3').click(function() {
  $('#text').val($('#text').val() + 3);
});

$('#4').click(function() {
  $('#text').val($('#text').val() + 4);
});

$('#5').click(function() {
  $('#text').val($('#text').val() + 5);
});

$('#6').click(function() {
  $('#text').val($('#text').val() + 6);
});

$('#7').click(function() {
  $('#text').val($('#text').val() + 7);
});

$('#8').click(function() {
  $('#text').val($('#text').val() + 8);
});

$('#9').click(function() {
  $('#text').val($('#text').val() + 9);
});

$('#0').click(function() {
	if($('#text').val() !== "") {
  		$('#text').val($('#text').val() + 0);
	}
});

$('#ac').click(function() {
  	$('#text').val('');
  	lock = false;
  
});

$('#opc').click(function() {
  	$('#text').val(-($('#text').val()));
});

$('#plus').click(function() {	
	if(check()) {
		$('#text').val($('#text').val() + "+");
		lock = false;
	};	
});

$('#minus').click(function() {
	if(check()) {
		$('#text').val($('#text').val() + "-");
		lock = false;
	};
});

$('#mult').click(function() {
	if(check()) {
		$('#text').val($('#text').val() + "*");
		lock = false;
	};
});

$('#division').click(function() {
	if(check()) {
		$('#text').val($('#text').val() + "/");
		lock = false;
	};		
});

$('#mod').click(function() {
	if(check()) {
		$('#text').val($('#text').val() + "%");
		lock = false;
	};
});

$('#dec').click(function() {
	if($('#text').val() === "") {
		$('#text').val($('#text').val() + 0 + ".");
		lock = true;
	}else {
		if(lock === false) {
			if(!check2()) {
				$('#text').val($('#text').val() + 0 + ".");
				lock = true;
			}else {
				$('#text').val($('#text').val() + ".");
				lock = true;
			}
		}
	}
});

$('#equal').click(function() {
	$('#text').val(eval($('#text').val()));
});