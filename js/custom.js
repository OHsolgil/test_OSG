$(document).ready(function() {
    $('#bn ul li a').click(function(){

	var href1 = $(this).attr('href');
	$('#main img').before("<img src="+href1+">");
	$('#main img:last').fadeOut('slow', function(){
		$('#main img:last').remove();	
	});
	return false;
	
	});
});


