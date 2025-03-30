import * as refs from './refs';
import * as LS from './local-storage-api';

export function init() {
  refs.themeBtn.addEventListener('click', () => {
    refs.body.classList.toggle('theme-dark') && LS.add('#theme', 'theme-dark');
    refs.body.classList.toggle('theme-light') &&
      LS.add('#theme', 'theme-light');
  });
}
