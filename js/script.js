$(window).on('load', function(){
 
    const targetWidth = ($('#js-target').outerWidth() + 10);
     
     $('dt, dd').css('width', targetWidth);
     
   });

   
  $(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-nav').on('click', function() {
         $('.drawer').drawer('close');
      });
  });

  jQuery('a[href^="#"]').on('click', function() {
     
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#') {
      var position = jQuery(id).offset().top - header;

    }
    // console.log(id );
    // console.log(position);
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
});
jQuery(window).on('scroll', function() {
    
    if ( 100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show');
    } else {
      jQuery('.to-top').removeClass('is-show');
    }
 });

 new WOW().init(); 