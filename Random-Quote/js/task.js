var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';
var currentq = "";
var currenta = "";
var getquote = function(data) {	

	$('.quote').text(data.quoteText); 	 
  	$('.author').text(data.quoteAuthor); 
  	currenta = data.quoteAuthor;
  	currentq = data.quoteText; 
};

$(document).on("ready", function() {
	$.getJSON(url, getquote, "jsonp");
});

$(".new").on("click", function() {
	$.getJSON(url, getquote, "jsonp");
});

$(".new2").on("click", function() {
	window.open('https://twitter.com/');
});