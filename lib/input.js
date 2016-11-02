// file for adding new todos
var $ = require('jquery');

var input = this;

input.$todoListElement = $("[data-js='todo__Items']");
input.$newTodoElement = $("[data-js='newTodo']");
input.$addTodoElement = $("[data-js='submit']");

input.init = function(){
  // function for the todo text input
  // on click worked best, tried keydown/keypress
  // and didnt work as planned


  input.$addTodoElement.on("click", function(e) {
    // prevents the page from refreshing
    e.preventDefault();
    // variable for whats input into text field
    var $todoValue = input.$newTodoElement.val();
    // if length of text is greater than two
    // than it may be added onto the list
    if ($todoValue.length > 2){
      input.addTodo($todoValue);
      input.$newTodoElement.val("");
    };
  });


  // template function for new list item
  input.addTodo = function(todoString){
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
    input.$todoListElement.append(todoTemplate);
  };

};
