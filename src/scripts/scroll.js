const container = document.querySelector('.blog__area');
const content = document.querySelector('.area__content');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');
const scrollbar = document.querySelector('.scrollbar');

const maxThumbTop = 75;

scrollbarThumb.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDragging = true;
  const startY = e.clientY;
  const maxScroll = 25;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const scrollValue = (deltaY / container.clientHeight) * content.scrollHeight;
    container.scrollTop = Math.min(Math.max(scrollValue, 0), content.scrollHeight - container.clientHeight + maxThumbTop);
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});

container.addEventListener('scroll', () => {
  const scrollPercentage = (container.scrollTop / (content.scrollHeight - container.clientHeight)) * 100;

  scrollbarThumb.style.top = `${Math.min(scrollPercentage, maxThumbTop)}%`;
  scrollbar.style.top = `calc(15% + ${container.scrollTop}px)`;
});
