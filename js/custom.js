$(document).ready(function(){
  // Multiple select
  $("select").selectpicker({style: 'btn-embossed btn-primary', menuStyle: 'dropdown-inverse'});

  // Price slider
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

  // Datepicker
  $("#datepicker").datepicker();
  $("#datepicker2").datepicker();

  // Tooltips
  var options = {
    animation: true,
    placement: 'bottom',
    trigger: 'hover focus'
  };
  $(".my-tooltip").tooltip(options);

  // Tabs
  $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

});