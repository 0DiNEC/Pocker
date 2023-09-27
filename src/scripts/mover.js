const verticalLine = document.querySelector('.vertical-line');
const images = verticalLine.querySelectorAll('.svg-img');

console.log(verticalLine.clientHeight);
images.forEach((img, index) => {
  const distance = img.getBoundingClientRect().bottom - verticalLine.getBoundingClientRect().top;
  console.log(`index :${index} distance:${distance}`);
})

const runSvgAnimate = () => {
  const translateHeight = verticalLine.clientHeight;
  images.forEach((img) => {
    let progress = 0;
    const speed = 10;
    const startDistance = img.getBoundingClientRect().bottom - verticalLine.getBoundingClientRect().top;
    
    const animateImage = () => {
      const distance = img.getBoundingClientRect().bottom - verticalLine.getBoundingClientRect().top;
      const imgHeight = img.clientHeight;
      
      if (distance < 0 - imgHeight) {
        progress = translateHeight;
        img.style.transform = `translateY(${startDistance + translateHeight - imgHeight}px)`;                        
      } else {
        progress -= speed;
        img.style.transform = `translateY(${progress}px)`;
      }
      
      requestAnimationFrame(animateImage);
    };

    animateImage();
  });
};

//runSvgAnimate();