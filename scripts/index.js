import { Task } from './Task.js';
import { Form } from './Form.js';
import { SectionTasks } from './SectionTasks.js';

const items = [
  { name: 'Полить цветы' },
  { name: 'Погулять с собакой' },
  { name: 'Позвонить маме' },
  { name: 'Сделать проектную работу' },
  { name: 'Отдохнуть' },
  { name: 'Прочесть туториал по React' },
]

const config = {
  selectorTasksContainer: '.content',
  selectorTemplateTask: '.template-task',
  selectorTemplateForm: '.template-form',
  selectorTemplateList: '.template-list',
}

function createTask(item) {
  const task = new Task(config.selectorTemplateTask, item, addTaskToList);
  return task;
}

function addTaskToList(item) {
	section.addTask(item);
}

const tasksContainer = document.querySelector(config.selectorTasksContainer);

const form = new Form(config.selectorTemplateForm, addTaskToList);
tasksContainer.append(form.getElement());

const section = new SectionTasks(config.selectorTasksList, items, createTask);
tasksContainer.append(section.getElement());
