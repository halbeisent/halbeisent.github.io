$(function() {
$('#left').click(()=>{
  $('.skill').removeClass('right').addClass('left');
});
$('#right').click(()=>{
  $('.skill').removeClass('left').addClass('right');
});
//Personnalisation de la scrollbar
  $("html").niceScroll({
cursorcolor:"#C81D25",background:"transparent",cursorwidth: 5,cursorborder: "0px solid transparent", cursorborderradius: "6px"});
   //Effet scroll au click pour chaque section du CV
  var scrollToAnchor = function( id ) {
    var elem = $("section[id='"+ id +"']"); // on crée une balise d'ancrage
    if ( typeof elem.offset()  === "undefined" ) { // on verifie si l'élément existe
		elem = $("#"+id); }
    if ( typeof elem.offset()  !== "undefined" ) { // si l'élément existe, on continue
      $('html, body').animate({
              scrollTop: elem.offset().top }, 1500 );} // on défini un temps de défilement de page
  };
  $("a").click(function( event ) { // on attache la fonction au click
    if ( $(this).attr("href").match("#") ) { // on vérifie qu'il s'agit d'une ancre
      event.preventDefault();
      var href = $(this).attr('href').replace('#', '') // on scroll vers la cible
      scrollToAnchor( href ); }
  });
});
