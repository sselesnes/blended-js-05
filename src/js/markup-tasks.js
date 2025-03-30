export function create(task, description) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${task}</h3>
      <p>${description}</p>
  </li>`;
}
