$(document).ready(function() {
  // hilight
  var $codes = $(".code");
  hljs.configure({ useBR: true, tabReplace: '  ' });

  $codes.each(function(e) {
    var $code = $(this);
    var code = $code.data("code");
    var highlighted = hljs.highlightAuto(code);
    $code.addClass("hljs xml");
    $code.html(hljs.fixMarkup(highlighted.value));
    // $code.wrap('<figure></figure>');
  });

  // copy to clipboard
  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function(trigger) {
      return trigger.parentNode.nextElementSibling;
    }
  });

  clipboard.on("success", function(e) {
    $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle');

      e.clearSelection();
  });

  clipboard.on("error", function(e) {});

  // Load Sidebar
  var templateDir = window.location.origin + '/arpon-design-system/docs/assets/template-parts';
  $.get(templateDir+"/sidebar-nav.html", function(data) {
    var $sidebar = $(".doc-content__sidebar").html(data);
    var path = window.location.pathname;
    var page = path.split("/").pop();
    $sidebar.find('.sidebar__list [href="'+ path +'"]').addClass("active");
  });
});

// hljs.initHighlightingOnLoad();
