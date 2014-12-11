$(document).ready(function(){

	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});

	$( "#js-menu-button" ).click(function() {
    $( ".main-nav-container" ).toggleClass( "fixed-nav" );
    $( ".menu-drop" ).toggleClass( "menu-show" );
    $( "html" ).toggleClass( "nav-open" );
    $( "#js-menu-button i" ).toggleClass( "fa-navicon fa-times" );

  });


});
