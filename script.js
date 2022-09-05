$(function () {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
    $nav = $('#site-nav'),
    $masthead = $('#masthead');
  
    $hamburger.click(function () {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false;
    });
  });


  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

  window.console = window.console || function(t) {};