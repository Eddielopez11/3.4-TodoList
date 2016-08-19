// Main.js

"use strict";



// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here

  var $todoFormEl = $("[data-js='todoForm']");
  var $newTodoEl = $("[data-js='newTodo']");
  var $addTodo = $("[data-js='submit']");
  var $todoList = $("[data-js='todo__Items']");


  $addTodo.on("click", function(e) {
    e.preventDefault();
    var $todoValue = $newTodoEl.val();
    if ($todoValue.length > 2){
      addTodo($todoValue);
      $newTodoEl.val("");
    };
  });

  function addTodo(todoString){
    var todoTemplate = `
      <li class="listUnderline">
        <div class="circleOutline">
          <p class="checkMark">&#10003;</p>
        </div>
        <p class="todo__item">${todoString}</p>
      </li>
    `;
    $todoList.append(todoTemplate);
  }




});
