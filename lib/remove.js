// file for completed todo items
var $ = require('jquery');

var rem = this;

rem.$todoListElement = $("[data-js='todo__Items']");

rem.init = function(){

  // function to delete selected todo item
  // *** deletes only on click right now ***
  rem.$todoListElement.on("click", "[data-js='todo__itemDelete']", function(e){
    // current target is for physical x character
    var $current = $(e.currentTarget);
    // var to grag the selected parent which is the list
    var $currentDelete = $current.parent("li");
    $currentDelete.remove();
  });



  // delete selected with del key
  // *** not working ***
  rem.$todoListElement.on("click", "[data-js='todo__item']", function(e){
    var $current = $(e.currentTarget);
    if ($current.data("clicked") == true){
      $current.on("keyup", function(d){
        if (d.keyCode == 8) {
          $current.parent().remove();
        }
      });
    };
  });

}
