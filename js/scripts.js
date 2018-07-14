$(document).ready(function(){
  $("form#topping_selection").submit(function(event){
    event.preventDefault();
    $("#pizza-order").show();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingOptions = $(this).val();
      $('#pizza-order').append(toppingOptions + "<br>");
    });
    $('#topping_selection').hide();
  });
});


//Select all checkboxes
(function(){
  var form = document.getElementById('pizza');
  var elements = form.elements;
  var options = elements.topping;
  var all = document.getElementById('all');

  function updateAll(){
    for (var i = o; i < options.length; i++) {
      options[i].checked = all.checked;
    }
  }
  addEvent(all, 'change', updateAll);

  function clearAllOption(e) {
    var target = e.target || e.srcElement;
    if(!target.checked) {
      all.checked = false;
    }
  }
  for (var i = 0; i < options.length; i++) {
    addEvent(options[i], 'change', clearAllOption);
  }
}());
