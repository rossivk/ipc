
// Humburger icon toggle

const navHamburgerIconToggle = document.getElementById('nav-hamburger-icon-toggle');
const navContainer = document.querySelector('.nav-container');

navHamburgerIconToggle.addEventListener('click', () => {
    navHamburgerIconToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
})


// cover video play and pause

const videoToPlay = document.getElementById("video-home-cover");
const videoButton = document.getElementById("video-button");

videoButton.addEventListener('click', playVideoOnClick);

function playVideoOnClick() {
    if (!videoToPlay.paused) {
        videoToPlay.pause();
        videoButton.innerHTML = "Play Video";
    } else {
        videoToPlay.play();
        videoButton.innerHTML = "Pause";
    }
}

