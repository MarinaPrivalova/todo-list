export class Form {
  constructor(template, addTaskToList) {
    this._template = template;
    this._addTaskToList = addTaskToList;
  }

  _getElementFromTemplate() {
    return document.querySelector('.template-form')
      .content
      .querySelector('.form')
      .cloneNode(true);
  }

  _addEventListeners() {
    this._element.addEventListener('submit', this._submitForm.bind(this));
  }

  _submitForm(evt) {
    evt.preventDefault();
    const taskName = this._element.querySelector('.form__input').value;

    this._addTaskToList({
      name: taskName
    });

    this._element.reset();
  }

  getElement() {
    this._element = this._getElementFromTemplate();
    this._addEventListeners();
    return this._element;
  }
}
