var utils = {
  debounce: function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  },

  onSrollChangeColor: function onSrollChangeColor($elemOnScroll) {
    return utils.debounce(function() {
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
  }
};

$(document).ready(function() {
  var $elemOnScroll = $("[data-color-on-scroll]");

  if ($elemOnScroll.length) {
    $(window).on("scroll", utils.onSrollChangeColor($elemOnScroll));
  }

  // Feather icons
  if (feather) {
    feather.replace();
  }

  /*
    Bootstrap Select
  */
  $(".selectpicker").selectpicker();
  /*
    Bootstrap Slider
  */
  $(".bootstrap-slider").slider({});

  // Bootstrap Tooltip & popover
  $('[data-toggle="tooltip"]').tooltip();
  
  // Popover
  $('[data-toggle="popover"]').each(function() {
    var popoverClass = '';
    if($(this).data('color')) {
        popoverClass = 'popover-'+$(this).data('color');
    }
    $(this).popover({
        trigger: 'focus',
        template: '<div class="popover '+ popoverClass +'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
  });

  // Form group focus class
  $(".form-control")
    .on("focus", function() {
      $(this)
        .parent(".input-group")
        .addClass("input-group-focus");
    })
    .on("blur", function() {
      $(this)
        .parent(".input-group")
        .removeClass("input-group-focus");
    });
});
