var results = [];
var content = '';
var searchi = $(".searchi")

var search = function() {
  	$.ajax({
    	url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('.searchi').val(),
    	dataType: 'jsonp',
    	type: 'POST',
    	success: function(data) {
    		var arr = data.query.search;
      		
      		$('.results').empty();
      		results = [];

      		for (var result in arr) {
        		results.push([arr[result].title,arr[result].snippet]);
        		content = '<div class="well"><a href="https://en.wikipedia.org/wiki/' + arr[result].title + '"target="_blank"><h3>' + arr[result].title + '</h3><p>' + arr[result].snippet + '</p></a></div>';
				$('.results').append(content);
      		}
    	}
  	});

	if ($('.searchi').val().length > 0) {
    	$('.articles').css('display', 'block');
  	}else {
  	 	$('.articles').css('display', 'none');
  	}
  };

$(".searchb").on("click",search);

$(".searchi").keypress(function(event) {
	if (event.keyCode == "13") {
	    $(".searchb").trigger('click');
	}
});


$(".searchi").blur(function() {
  searchi.css("width","2%");
  searchi.val("");
});

