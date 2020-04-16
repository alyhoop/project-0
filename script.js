const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


var clicks = 0;

function newTodo() {
  clicks += 1;
  document.getElementById('item-count').textContent = clicks;
}

var clicks = 0;

function resetTodo() {
  document.getElementById('item-count').textContent = 0;
  clicks += 1;
  document.getElementById('unchecked-count').textContent = clicks;
}
