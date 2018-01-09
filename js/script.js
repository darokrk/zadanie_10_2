// przypisujemy co drugiemu elementowi <span> czerwony kolor czcionki

var span = $("span");
	span.each(function(index, element) {
});

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

// mozna tez tak

/*
$("span:even").css('color', 'red');
*/

// -----------------------------------------

// dodanie nowego elementu za pomoca jQuery (przycisku)

var paragraphs = $('p');
paragraphs.each(function(index, element) {

	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
	$(element).append(button);

});

// -----------------------------------------

// dodanie event handlerow (kazdy przycisk ma wyswietlic alert zaw. jego zawartosc)

$("button"). click(function() {
	alert($(this).attr("data-tmp"));
});



