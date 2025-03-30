import * as refs from './refs';

export function add(createMarkup) {
  refs.tasksList.insertAdjacentHTML('beforeend', createMarkup);
}

export function remove(taskElement) {
  taskElement.remove();
}
