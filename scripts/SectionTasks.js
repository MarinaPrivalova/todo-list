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

  getElement() {
    this._element = this._getElementFromTemplate();
    this._items.forEach(item => {
      const task = this._createTask(item);
      const element = task.getElement();
      this._element.append(element);
    });
    return this._element;
  }
}
