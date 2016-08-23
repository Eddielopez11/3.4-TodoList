// file for completing/counting compteted
var $ = require('jquery');

var completed = this;

completed.$todoListElement = $("[data-js='todo__Items']");
completed.$counterElement = $("[data-js='completedCounter']");

completed.init = function(){

  var checkClicked = false;
  // adds checkmark for completion when clicking on each todo list item
  // function is assigned to div then deligated
  completed.$todoListElement.on("click", "[data-js='itemComplete']", function(e){
    checkClicked = true;
    // $current is for clicked circle border
    var $current = $(e.currentTarget);
    // the circle selected then grabs its span child
    // which is the hidden checkmark through css
    var $currentCheck = $current.children("span");
    // toggles from starting hidden state to unhidden
    // and the other way aroung after that
    $currentCheck.toggle();
    if (checkClicked == true) {
      var $compNumb = $(".checkMark").filter(function(c){
        return $(this).css("display") !== "none";
      }).length;
      completedCounter($compNumb);
    }
    checkClicked = false;
  });

  // completed counter
  function completedCounter(num){
    var counterTemplate = `
      <footer class="todo__footer"
              data-js="completedCounter">
        <span>${num}</span> completed
      </footer>
    `;
    completed.$counterElement.replaceWith(counterTemplate)
  }

}
