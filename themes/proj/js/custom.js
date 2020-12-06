jQuery( document ).ready( function( $ ){

    $winW = $( window ).width(),
    $connect = $( '.header-connect' ),
    $connectA = $( '#connect-open' );
  
    $( '.home-slider' ).slick();

    $( '.testimonial-slider' ).slick({
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 4500,
        dots: true
    });

    // Initialize if window under 568px
    if ( $winW < 568 ) {

        // Open social connect slidout on mobile
        $connect.css( 'right', -$connect.outerWidth() + 30 );
        $connectA.on( 'click', function( e ){

            if ( $connect.hasClass( 'opened' ) ) {
                $connect.css( 'right', -$connect.outerWidth() + 30 );
                $connect.removeClass( 'opened' );
            } else {
                $connect.addClass( 'opened' );
                $connect.css( 'right', 0 );
            }

        });
    }

    $( window ).scroll( function() {

		var $parallax = $( '.parallax' ),
            $wScroll = $( this ).scrollTop(),
            $itemPos = $parallax.offset(),
            $compScroll = $wScroll - $itemPos.top;
            
		$parallax.css({
			'background-position-y' :  -$compScroll /8  ,
        });
        
        if ( $(window).width() > 1023 ) {
            if ( $wScroll > 400 ) {
                $( '.top-header' ).addClass( 'scrolled' );
            } else {
                $( '.top-header' ).removeClass( 'scrolled' );
            }
        }
    });
});