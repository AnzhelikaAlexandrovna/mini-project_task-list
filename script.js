const listN = document.querySelector('.todo-list');    // N(Node) в переменной означает значение ОБЪЕКТА (Node)
const items = listN.children;
const emptyListMessageN = document.querySelector('.empty-tasks');
const itemFormN = document.querySelector('.add-form');
const itemTitleN = itemFormN.querySelector('.add-form-input');
const taskTemplateN = document.querySelector('#task-template').content;
const itemTemplateN = taskTemplateN.querySelector('.todo-list-item');

const toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessageN.classList.remove('hidden');
  } else {
    emptyListMessageN.classList.add('hidden');
    }
};

const addCheckHandler = function (item) {
  const checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

itemFormN.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const taskText = itemTitleN.value;
  const taskNode = itemTemplateN.cloneNode(true);
  const taskDescriptionNode = taskNode.querySelector('span');
  taskDescriptionNode.textContent = taskText;
  addCheckHandler(taskNode);

  listN.appendChild(taskNode);
  toggleEmptyListMessage();
  itemTitleN.value = '';
});
