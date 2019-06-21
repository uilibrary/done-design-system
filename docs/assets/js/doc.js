$(document).ready(function() {
  var $examples = $(".doc-example");

  // $examples.each(function(e) {
  //   var $example = $(this);
  //   var $exampleHTML = $example.html();
  //   $example.next().next().data('code', $exampleHTML);

  // });

  // hilight
  var $codes = $(".code");
  hljs.configure({ useBR: true, tabReplace: "  " });

  $codes.each(function(e) {
    var $code = $(this);
    // var $example = $code.prev().prev();
    var code = $code.data("code");

    // $example.html(code);

    var highlighted = hljs.highlightAuto(code);
    $code.addClass("hljs");
    $code.html(hljs.fixMarkup(highlighted.value));
    $code.wrap("<pre></pre>");
  });

  // copy to clipboard
  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function(trigger) {
      return trigger.parentNode.nextElementSibling;
    }
  });

  clipboard.on("success", function(e) {
    $(e.trigger)
      .attr("title", "Copied!")
      .tooltip("_fixTitle")
      .tooltip("show")
      .attr("title", "Copy to clipboard")
      .tooltip("_fixTitle");

    e.clearSelection();
  });

  clipboard.on("error", function(e) {});

  // Load Sidebar
  var templateDir =
    window.location.origin + "/done-design-system/docs/assets/template-parts";
  $.get(templateDir + "/sidebar-nav.html", function(data) {
    var $sidebar = $(".doc-content__sidebar").html(data);
    var path = window.location.pathname;
    var page = path.split("/").pop();
    $sidebar.find('.sidebar__list [href="' + path + '"]').addClass("active");
  });

  // Load Header
  $.get(templateDir + "/header.html", function(data) {
    var $header = $(".doc-header").html(data);
  });

  // Collapsible sidebar
  $('.sidebar-toggle').on('click', function() {
    $('.wrapper').toggleClass('sidebar-open');
  })

});

// hljs.initHighlightingOnLoad();
