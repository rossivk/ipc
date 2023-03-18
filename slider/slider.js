// carousel gallery

const images = ["DSC02663.jpg", "DSC02664.jpg", "DSC02665.jpg"];
// const images = ["DSC02663.jpg", "DSC02664.jpg", "DSC02665.jpg", "DSC02666.jpg", "DSC02667.jpg", "DSC02670.jpg", "DSC02674.jpg", "DSC02687.jpg", "DSC02693.jpg", "DSC02696.jpg", "DSC02697.jpg"];

const carousel = document.querySelector('.slider');

const interval = setInterval(function () {
    startCarousel();
}, 5000);

function startCarousel() {
    let index = 0;
    let currentImage = `url(../assets/images/${images[index]})`;
    carousel.classList.remove('slide');
    void carousel.offsetWidth;
    carousel.classList.add('slide')
    carousel.style.backgroundImage = currentImage;

    // let nextImage = `url(../assets/images/${images[index + 1]})`;
    // carousel.style.backgroundImage = nextImage;

    let newLastElement = images.shift();
    images.push(newLastElement);
}



