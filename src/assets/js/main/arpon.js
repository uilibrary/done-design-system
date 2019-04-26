$(document).ready(function() {

  if(feather) {
    feather.replace();
  }

  // Form group focus class
  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });
})