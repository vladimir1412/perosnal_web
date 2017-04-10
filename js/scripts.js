
// NAVIGATION HAMBURGER
jQuery(document).ready(function(){
  jQuery('#hamburger').click(function(event){
    event.stopPropagation();
    jQuery('#toggle').toggle();
  });

});
// CLOSES NAVIGATIO IF CLICKED OUTSIDE OF ELEMENT
jQuery(window).click(function() {
    jQuery('#toggle').hide();
});
//  SCROLL ANIMATION NAVIGATION
jQuery(document).on('click', 'a[href^="#"]', function(e) {
    // TARGET ELEMENT ID
    var id = jQuery(this).attr('href');

    // TARGET ELEMENT
    var jQueryid = jQuery(id);
    if (jQueryid.length === 0) {
        return;
    }

    e.preventDefault();

    var pos = jQueryid.offset().top;

    jQuery('body, html').animate({scrollTop: pos});
  });
// Animation with wow js
new WOW().init();

// async style css
// jQuery('head').append( jQuery('<link rel="stylesheet" type="text/css" />').attr('href', 'css/style.css') );
// jQuery('head').append( jQuery('<link rel="stylesheet" type="text/css" />').attr('href', 'css/animate.css') );
// jQuery('head').append( jQuery('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css') );
