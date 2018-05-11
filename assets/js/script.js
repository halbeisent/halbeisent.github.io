//Effet scroll jusque chaque section du cv
$(function() {
  var scrollToAnchor = function( id ) {
    var elem = $("section[id='"+ id +"']");
    if ( typeof elem.offset()  === "undefined" ) {
		elem = $("#"+id); }
    if ( typeof elem.offset()  !== "undefined" ) {
      $('html, body').animate({
              scrollTop: elem.offset().top }, 1500 );}
  };
  $("a").click(function( event ) {
    if ( $(this).attr("href").match("#") ) {
      event.preventDefault();
      var href = $(this).attr('href').replace('#', '')
      scrollToAnchor( href ); }
  });
});

// Initialisation de Materialize
  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  });
