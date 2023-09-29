const banner = document.querySelector('.banner');
const verticalLines = document.querySelectorAll('.vertical-line');
const marginY = 24;
const maxDistance = 350;
const horizontalMode = 1080;

const initVerticalLine = () => {
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
};

const runSvgAnimate = () => {
  verticalLines.forEach((verticalLine, index) => {
    const images = verticalLine.querySelectorAll('.svg-img');
    const verticalLineHeight = verticalLine.clientHeight;
    images.forEach((img, i) => {
      let progress = img.getBoundingClientRect().top;
      const speed = index === 1 ? 2 : 4;
      const animateImage = () => {
        if (progress < -maxDistance) {
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

const reInitMovementAnimation = () => {
  initVerticalLine();
  runSvgAnimate();
};

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  reInitMovementAnimation();
  if (window.innerWidth <= horizontalMode) banner.style.setProperty('transform', 'rotateZ(90deg)');
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= horizontalMode) banner.style.setProperty('transform', 'rotateZ(90deg)');
  else banner.style.setProperty('transform', 'rotateZ(0)');
});
