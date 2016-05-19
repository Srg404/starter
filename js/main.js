/**
 * Client startTheme - startTheme
 * SCRIPTS
 *
 * @author SLECOMTE (at) emakina (dot) com
 *
 * created May 2016
 */

(function ($) {
  'use strict';

  var _screen,
      _resizeTimeOut,
      $html = $('html');

  // test if Javascript is available
  $html.addClass('js');










  // RESPONSIVE
  var resizeMethod = function(){

    // Define breakpoints (Compatibility:  greater than IE9  --> http://caniuse.com/#feat=matchmedia)
    if ( window.matchMedia("(min-width: 768px)").matches ) {
      _screen = 'screen-large';
    } else if ( window.matchMedia("(min-width:480px)").matches ){
      _screen = 'screen-medium';
    }else{
      _screen = 'screen-small';
    }
    // Add body class for each breakpoints
    $html.removeClass('screen-large screen-medium screen-small').addClass(_screen);

    clearTimeout(_resizeTimeOut);
    _resizeTimeOut = setTimeout(function(){
      // FUNCTION RESPONSIVE HERE (this functions is launch on document ready and on each window resize)



    },500);
  };

  $(window).resize( function(){ resizeMethod(); });

  $(document).ready(function () {
    resizeMethod();
    // FUNCTION NOT RESPONSIVE HERE (this functions is only launch on document ready )



  });


})(jQuery);
