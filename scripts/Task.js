export class Task {
  constructor (template, task, addTaskToList) {
    this._template = template;
    this._name = task.name;
    this._addTaskToList = addTaskToList;
  }

  _getElementFromTemplate() {
    return document.querySelector('.template-task')
      .content
      .querySelector('.task')
      .cloneNode(true);
  }

  _deleteTask() {
    this._element.remove();
  }

  _duplicateTask() {
    const taskName = this._name;
    this._addTaskToList({ name: taskName });
  }

  _addEventListeners() {
    this._element.querySelector('.task__btn_type_delete').addEventListener('click', this._deleteTask.bind(this));
    this._element.querySelector('.task__btn_type_copy').addEventListener('click', this._duplicateTask.bind(this));;
  }

  getElement() {
    this._element = this._getElementFromTemplate();
    this._element.querySelector('.tast__text').textContent = this._name;

    this._addEventListeners();

    return this._element;
  }
}
