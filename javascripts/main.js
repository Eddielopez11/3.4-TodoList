// Main.js

"use strict";



// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here

  var $todoFormEl = $("[data-js='todoForm']");
  var $newTodoEl = $("[data-js='newTodo']");
  var $addTodo = $("[data-js='submit']");
  var $todoList = $("[data-js='todo__Items']");
  var $counter = $("[data-js='completedCounter']");

  // delete selected with del key
  // *** not working ***
  $todoList.on("click", "[data-js='todo__item']", function(e){
    var $current = $(e.currentTarget);
    if ($current.data("clicked") == true){
      $current.on("keyup", function(d){
        if (d.keyCode == 8) {
          $current.parent().remove();
        }
      });
    };
  });

  // function to delete selected todo item
  // *** deletes only on click right now ***
  $todoList.on("click", "[data-js='todo__itemDelete']", function(e){
    // current target is for physical x character
    var $current = $(e.currentTarget);
    // var to grag the selected parent which is the list
    var $currentDelete = $current.parent("li");
    $currentDelete.remove();
  });

  var checkClicked = false;
  // adds checkmark for completion when clicking on each todo list item
  // function is assigned to div then deligated
  $todoList.on("click", "[data-js='itemComplete']", function(e){
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
  });

  // function for the todo text input
  // on click worked best, tried keydown/keypress
  // and didnt work as planned
  $addTodo.on("click", function(e) {
    // prevents the page from refreshing
    e.preventDefault();
    // variable for whats input into text field
    var $todoValue = $newTodoEl.val();
    // if length of text is greater than two
    // than it may be added onto the list
    if ($todoValue.length > 2){
      addTodo($todoValue);
      $newTodoEl.val("");
    };
  });

  // template function for new list item
  function addTodo(todoString){
    var todoTemplate = `
      <li class="listUnderline">
        <div class="circleOutline"
             data-js="itemComplete">
          <span class="checkMark">
             &#10003;
          </span>
        </div>
        <p class="todo__item"
           data-js="todo__item">
           ${todoString}
        </p>
        <mark class="todo__itemDelete"
              data-js="todo__itemDelete">
          X
        </mark>
      </li>
    `;
    $todoList.append(todoTemplate);
  }

  // completed counter
  function completedCounter(num){
    var counterTemplate = `
      <footer class="todo__footer"
              data-js="completedCounter">
        <span>${num}</span> counter
      </footer>
    `;
    $counter.replaceWith(counterTemplate)
  }

});
