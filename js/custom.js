$(document).ready(function(){
  $("select").selectpicker({style: 'btn-embossed btn-primary', menuStyle: 'dropdown-inverse'});

  var $slider = $("#slider");
  if ($slider.length > 0) {
    $slider.slider({
      min: 1,
      max: 100,
      value: 50,
      orientation: "horizontal",
      range: true
    });
  }

  $('.datepicker').datepicker();
});