export function add(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  return localStorage.getItem(key);
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function getKeys() {
  return Object.entries(localStorage)
    .filter(([key]) => key !== '#theme')
    .map(([key, value]) => [key, JSON.parse(value)]);
}
