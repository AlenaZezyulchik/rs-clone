import viewBox from './router/router';
import listenerToNavBtn from './navigation/nav';

function app(): void {
  document.addEventListener('DOMContentLoaded', () => {
    viewBox();
    listenerToNavBtn();
  });
}

export default app;
