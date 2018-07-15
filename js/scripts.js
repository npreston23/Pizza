$(document).ready(function(){
  $("form#Pizza").submit(function(event){
    event.preventDefault();
    $("#topping-order").show();
    $("input:checkbox[name=Topping]:checked").each(function(){
      var toppingOptions = $(this).val();
      $('#topping-order').append(toppingOptions + "<br>");
    });
    $("#size-order").show();
    $("input:checkbox[name=Size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $('#size-order').append(pizzaSize + "<br>");
    });
    $('form#Pizza').hide();
  });
});

/*
//Select all checkboxes - Not working!
(function(){
  var formTopping = document.getElementById ('Topping'); //Get topping Form
  var elements = form.elements; //All elements in form
  var options = elements.Topping; //Array: Topping checkboxes
  var all = document.getElementById('all'); //The all checkbox

  function updateAll(){
    for (var i = 0; i < options.length; i++) {
      options[i].checked = all.checked;
    }
  }

  addEvent(all, 'change', updateAll); //Add event listener

  function clearAllOption(e) {
    var target = e.target || e.srcElement;
    if(!target.checked) {
      all.checked = false;
    }
  }
  for (var i = 0; i < options.length; i++) {
    addEvent(options[i], 'change', clearAllOption(e));
  }


}());

(function(){
  var formSize = document.getElementById ('Size'); //Get size Form
  var elements = form.elements; //All elements in form
  var size = elements.Size; //Array: Size checkboxes

  function updateAll(){
    for (var i = 0; i < size.length; i++) {
    }
  }
}()); *\
