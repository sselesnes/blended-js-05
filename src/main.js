import * as refs from './js/refs';
import * as task from './js/tasks';
import * as theme from './js/theme-switcher';

theme.init();
task.init();

refs.headerForm.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = refs.headerForm.elements.taskName.value.trim();
  const taskDescription = refs.headerForm.elements.taskDescription.value.trim();
  if (taskName && taskDescription) {
    task.add(taskName, taskDescription);
    refs.headerForm.reset();
  } else {
    alert('empty taskname or description!');
  }
});
