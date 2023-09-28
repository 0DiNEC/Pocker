const verticalLines = document.querySelectorAll('.vertical-line');
const marginY = 24;

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
  verticalLines.forEach((verticalLine) => {
    const images = verticalLine.querySelectorAll('.svg-img');
    const verticalLineHeight = verticalLine.clientHeight;
    images.forEach((img) => {
      let progress = img.getBoundingClientRect().top;
      

      const speed = 10;

      const animateImage = () => {
        const distance = img.getBoundingClientRect().top - verticalLine.getBoundingClientRect().top;

        if (distance < 0) {
          progress = verticalLineHeight;
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
