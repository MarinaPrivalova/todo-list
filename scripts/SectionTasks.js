export class SectionTasks {
  constructor(template, items, createTask) {
    this._template = template;
    this._items = items;
    this._createTask = createTask;
  }

  _getElementFromTemplate() {
    return document.querySelector('.template-list')
      .content
      .querySelector('.checklist')
      .cloneNode(true);
  }

  addTask(item) {
    const task = this._createTask(item);
    const element = task.getElement();
    this._element.append(element);
  }

  getElement() {
    this._element = this._getElementFromTemplate();
    this._items.forEach(item => {
      this.addTask(item);
    });
    return this._element;
  }
}
