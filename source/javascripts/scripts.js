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

	$( "#js-menu-button-open,#js-menu-button-close" ).click(function() {
        $( ".main-nav-container" ).toggleClass( "fixed-nav" );
        $( ".menu-drop" ).toggleClass( "menu-show" );
        $( "html" ).toggleClass( "nav-open" );
    });

    //company tabs
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })


});
