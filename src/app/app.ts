import listenerToNavBtn from './navigation/nav';
import viewBox from './router/router';

function app(): void {
  document.addEventListener('DOMContentLoaded', () => {
    viewBox();
    listenerToNavBtn();
  });
}

export default app;
