const { default: addCheckedClass } = require("./checkTodo");
const { default: deleteButton } = require("./deleteButton");
const { default: displayTodos} = require("./displayTodos");
const { default: newTodoButton } = require("./newTodoButton");

newTodoButton();
displayTodos();
deleteButton();
addCheckedClass();
    