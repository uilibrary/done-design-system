$(document).ready(function() {

  // hilight
  var $codes = $('.code');
  hljs.configure({useBR: true});

  $codes.each(function(e) {
    var $code = $(this);
    var code = $code.data('code');
    var highlighted = hljs.highlightAuto(code);
    $code.addClass('hljs xml');
    $code.html(hljs.fixMarkup(highlighted.value))
  })

  // copy to clipboard
  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {
    
  })

  clipboard.on('error', function (e) {
    
  })
})

hljs.initHighlightingOnLoad();