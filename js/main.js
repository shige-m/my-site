function main() {

  (function () {
    'use strict';

    $('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    $('#nav').affix({
      offset: {
        top: $('header').height()
      }
    });

    $(window).load(function() {
      var $container = $('.portfolio-items');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

      $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    });

    $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',
      keyboardNav: true,
    });

  }());

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.web a[data-lightbox-gallery]').forEach(function(el) {
      el.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
  
        setTimeout(function () {
          const wrap = document.querySelector('.nivo-lightbox-wrap');
          if (!wrap || document.querySelector('.lightbox-link-btn')) return;
  
          const btn = document.createElement('a');
          btn.href = url;
          btn.target = '_blank';
          btn.className = 'lightbox-link-btn';
          btn.innerText = 'webサイトへ →';
          btn.style.display = 'block';
          btn.style.textAlign = 'center';
          btn.style.marginTop = '15px';
  
          wrap.appendChild(btn);
        }, 300);
      });
    });
  });
  

}

main();
