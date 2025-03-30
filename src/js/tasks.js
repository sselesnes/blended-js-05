import * as refs from './refs';
import * as LS from './local-storage-api';
import * as render from './render-tasks';
import * as markup from './markup-tasks';

export function add(task, description) {
  if (!LS.get(task)) {
    LS.add(task, description);
    render.add(markup.create(task, description));
  }
}

export function init() {
  console.log(LS.getKeys());
  LS.getKeys().forEach(([key, value]) => {
    render.add(markup.create(key, value));
  });
}

function remove(taskElement) {
  const taskName = taskElement.querySelector('h3').textContent;
  const taskDescription = taskElement.querySelector('p').textContent;
  LS.remove(taskName, taskDescription);
  render.remove(taskElement);
}

refs.tasksList.addEventListener('click', event => {
  if (event.target.className == 'task-list-item-btn') {
    const taskElement = event.target.closest('.task-list-item');
    remove(taskElement);
  }
});
