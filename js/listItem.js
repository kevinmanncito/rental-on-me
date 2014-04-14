$(document).ready(function(){

  $( "#dialog-modal" ).dialog({
    height: 400,
    width: 500,
    modal: true
  });

  $("select").selectpicker({style: 'btn-embossed btn-primary', menuStyle: 'dropdown-inverse'});

});