const main = document.querySelector('main');
const verticalLines = document.querySelectorAll('.vertical-line');
const marginY = 24;
const maxDistance = 200;

window.addEventListener('load', () => {
  verticalLines.forEach((verticalLine) => {
    const images = verticalLine.querySelectorAll('.svg-img');
    let offsetTop = 0;
    images.forEach((img) => {
      const imgHeight = img.clientHeight;
      img.style.top = `${offsetTop}px`;
      offsetTop += imgHeight + marginY;
    });
    verticalLine.style.height = `${offsetTop}px`;
  });
  runSvgAnimate();
});

const runSvgAnimate = () => {
  verticalLines.forEach((verticalLine, index) => {
    const images = verticalLine.querySelectorAll('.svg-img');
    const verticalLineHeight = verticalLine.clientHeight;
    const direction = index === 1 ? -1 : 1;
    images.forEach((img, i) => {
      let progress = img.getBoundingClientRect().top;
      const speed = index + 2;

      const animateImage = () => {
        const imgRect = img.getBoundingClientRect();
        const lineRect = verticalLine.getBoundingClientRect();

        if (direction === 1) {
          const distance = imgRect.top - lineRect.top;

          if (distance < -maxDistance) {
            progress = verticalLineHeight - maxDistance;
            img.style.top = `${progress}px`;
          } else {
            progress -= speed;
            img.style.top = `${progress}px`;
          }
        } else if (direction === -1) {
          const distance = imgRect.top - lineRect.bottom;
          if (distance >= maxDistance / 2) {
            progress = -maxDistance;
            img.style.top = `${progress}px`;
          } else {
            progress += speed;
            img.style.top = `${progress}px`;
          }
        }
        requestAnimationFrame(animateImage);
      };
      animateImage();
    });
  });
};
