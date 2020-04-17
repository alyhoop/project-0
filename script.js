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

function resetTodo() {
  document.getElementById('unchecked-count').textContent =
  document.getElementById('item-count').textContent;

  document.getElementById('item-count').textContent = 0;
}

function totalReset() {
  document.getElementById('item-count').textContent = 0;
  document.getElementById('unchecked-count').textContent = 0;
}

var data = {
	listItems: []
};

var template = function () {

	// If there are no list items
	if (data.listItems.length < 1) return '<p><em>You do not have any list items yet. Try adding one with the form above.</em></p>';

	// If there are
	return '<ul>' + data.listItems.map(function (item) {
		return '<li>' + item + '</li>';
	}).join('') + '</ul>';

};

var render = function () {
	var list = document.querySelector('#list');
	if (!list) return;
	list.innerHTML = template();
};


/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};

document.addEventListener('submit', function (event) {

	// Make sure the submitted form was for our list items
	if (!event.target.matches('#add-to-list')) return;

	// Stop the form from submitting
	event.preventDefault();

	// Get the list item
	var item = event.target.querySelector('#list-item');
	if (!item || item.length < 1) return;

	// Update the data and UI
	data.listItems.push(sanitizeHTML(item.value));
	render();

	// Clear the field and return to focus
	item.value = '';
	item.focus();

}, false);
