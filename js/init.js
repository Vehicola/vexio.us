(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
// Show sideNav
//$('.button-collapse').sideNav('show');
  $('.collapsible').collapsible();
  $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
