$(document).ready(function() {
function hideAll() {
	$('#pressure').hide();
	$('#fast').hide();
	$('#misery').hide();
	$('#ignorance').hide();

	$('#theall').hide();
	$('#theparamore').hide();
	$('#theriot').hide();
	$('#thebrand').hide();
}

hideAll();


$('.albums').click(function() {
		 hideAll();

	$('audio').each(function() {
		this.pause();
		this.currentTime = 0;
	});



switch ($(this).attr("id")) {
		 case "all":
		   $('#theall').slideToggle();
			 $('#pressure').show();
			 break;
		 case "paramore":
		  $('#theparamore').slideToggle();
			 $('#fast').show();
			 break;
		 case "riot":
		 $('#theriot').slideToggle();
			 $('#misery').show();
			 break;
		 case "brand":
		 $('#thebrand').slideToggle();
			 $('#ignorance').show();
			 break;
	 }
 });
});
