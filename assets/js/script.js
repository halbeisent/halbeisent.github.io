//Effet scroll au clic pour chaque section du CV
$(function() {
  var scrollToAnchor = function( id ) {
    //Création de la balise d'ancrage
    var elem = $("section[id='"+ id +"']");
    //Vérification si l'élément existe
    if ( typeof elem.offset()  === "undefined" ) {
		elem = $("#"+id); }
    //On continue si l'élément existe
    if ( typeof elem.offset()  !== "undefined" ) {
      $('html, body').animate({
    //définition de la vitesse de défilement
              scrollTop: elem.offset().top }, 1500 );}
  };
  //on associe la fonction au clic
  $("a").click(function( event ) {
    //on vérifie s'il s'agit d'une ancre
    if ( $(this).attr("href").match("#") ) {
      event.preventDefault();
      //activation du scroll
      var href = $(this).attr('href').replace('#', '')
      scrollToAnchor( href ); }
  });
});

//NiceScroll pour une scrollbar custom raccord avec mon thème
$(document).ready(function() {
  $("html").niceScroll({
cursorcolor:"#DD1C1A",background:"transparent",cursorwidth: 5,cursorborder: "0px solid transparent", cursorborderradius: "6px"});
});
