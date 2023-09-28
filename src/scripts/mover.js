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
    images.forEach((img, i) => {
      let progress = img.getBoundingClientRect().top;
      const speed = index === 1 ? 2 : 4;

      const animateImage = () => {
        const imgRect = img.getBoundingClientRect();
        const lineRect = verticalLine.getBoundingClientRect();

        const distance = imgRect.top - lineRect.top;
        if (distance < -maxDistance) {
          progress = verticalLineHeight - maxDistance;
          img.style.top = `${progress}px`;
        } else {
          progress -= speed;
          img.style.top = `${progress}px`;
        }
        requestAnimationFrame(animateImage);
      };
      animateImage();
    });
  });
};
