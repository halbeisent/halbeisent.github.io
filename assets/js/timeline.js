$(function ($) {
    var timelineBlocks = $('.cd-timeline-block');
    var offset = 0.8;

    //Cache les blocks qui ne sont pas encore dans le champs
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
                ? setTimeout(function () {
                    showBlocks(timelineBlocks, offset);
                }, 100)
                : window.requestAnimationFrame(function () {
                    showBlocks(timelineBlocks, offset);
                });
    });

    /*
     * Fonction permettant de cacher les bloc hors champs
     * @param {object} blocks -> Bloc contenant une date et les événements associés
     * @param {float} offset -> marge
     */
    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }
    /*
     * Fonction permettant d'afficher les bloc à leur entrée dans le champs
     * @param {object} blocks -> Bloc contenant une date et les événements associés
     * @param {float} offset -> marge
     */
    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});