"use strict";

/*
* Utilities
*/
var utils = {
  debounce: function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  },
  isMobile: function isMobile() {
    return window && window.matchMedia("(max-width: 767px)").matches;
  },
  onSrollChangeColor: function onSrollChangeColor($elemOnScroll) {
    return utils.debounce(function () {
      var colorClass = $elemOnScroll.data("color-on-scroll");
      var distance = $elemOnScroll.data("scroll-distance");

      if ($(document).scrollTop() > distance) {
        if (!$elemOnScroll.hasClass(colorClass)) {
          // transparent = false;
          $elemOnScroll.addClass(colorClass);
        }
      } else {
        if ($elemOnScroll.hasClass(colorClass)) {
          // transparent = true;
          $elemOnScroll.removeClass(colorClass);
        }
      }

      // console.log($elem, distance);
    }, 20);
  },
  currentYPosition: function currentYPosition() {
    if (!window) {
      return;
    }
    // Firefox, Chrome, Opera, Safari
    if (window.pageYOffset) return window.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  },

  elmYPosition: function elmYPosition(elm) {
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  },
  scrollTo: function scrollTo(elm) {
    // var elm = document.getElementById(elmID);
    if (!elm) {
      return;
    }
    var startY = this.currentYPosition();
    var stopY = this.elmYPosition(elm);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout(function (leapY) {
          return function () {
            window.scrollTo(0, leapY);
          };
        }(leapY), timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var _i = startY; _i > stopY; _i -= step) {
      setTimeout(function (leapY) {
        return function () {
          window.scrollTo(0, leapY);
        };
      }(leapY), timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
    return false;
  }

};
/*
* End Utilities
*/

$(document).ready(function () {
  var $elemOnScroll = $("[data-color-on-scroll]");
  // init
  utils.onSrollChangeColor($elemOnScroll)();

  // onScroll event listener
  if ($elemOnScroll.length) {
    $(window).on("scroll", utils.onSrollChangeColor($elemOnScroll));
  }

  // Feather icons
  if (feather) {
    feather.replace();
  }

  /*
  *  Bootstrap Select
  */
  $(".selectpicker").selectpicker();
  /*
  *  Bootstrap Slider
  */
  $(".bootstrap-slider").slider({});

  /* 
  *  Bootstrap Tooltip & popover 
  */
  $('[data-toggle="tooltip"]').tooltip();

  // Popover
  $('[data-toggle="popover"]').each(function () {
    var popoverClass = '';
    if ($(this).data('color')) {
      popoverClass = 'popover-' + $(this).data('color');
    }
    $(this).popover({
      trigger: 'focus',
      template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  });

  // Form group focus class
  $(".form-control").on("focus", function () {
    $(this).parent(".input-group").addClass("input-group-focus");
  }).on("blur", function () {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  /*
  * data-scroll-to="elementID"
  */
  $('[data-scroll-to]').each(function (i) {
    var $this = $(this);
    var id = $this.data('scroll-to');

    $this.on('click', function (e) {
      e.preventDefault();
      utils.scrollTo(document.getElementById(id));
    });
  });
});