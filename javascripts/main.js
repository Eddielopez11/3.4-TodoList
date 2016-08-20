// Main.js

"use strict";



// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here

  var $todoFormEl = $("[data-js='todoForm']");
  var $newTodoEl = $("[data-js='newTodo']");
  var $addTodo = $("[data-js='submit']");
  var $todoList = $("[data-js='todo__Items']");

  // adds checkmark for completion when clicking on each todo list item
  // function is assigned to div then deligated
  $todoList.on("click", "[data-js='itemComplete']", function(e){
    // $current is for clicked circle border
    var $current = $(e.currentTarget);
    // the circle selected then grabs its span child
    // which is the hidden checkmark through css
    var $currentCheck = $current.children("span");
    // toggles from starting hidden state to unhidden
    // and the other way aroung after that
    $currentCheck.toggle();
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
        <p class="todo__item">${todoString}</p>
      </li>
    `;
    $todoList.append(todoTemplate);
  }




});
