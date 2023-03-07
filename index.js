
// Humburger icon toggle

const navHamburgerIconToggle = document.getElementById('nav-hamburger-icon-toggle');
const navContainer = document.querySelector('.nav-container');
const navLinkWrapper = document.querySelector('.nav-link-wrapper ');

navHamburgerIconToggle.addEventListener('click', () => {
    navHamburgerIconToggle.classList.toggle('active');
    // navContainer.classList.toggle('active');

    navLinkWrapper.classList.toggle("show-links");

})


// cover video play and pause

// const videoToPlay = document.getElementById("video-home-cover");
// const videoButton = document.getElementById("video-button");

// videoButton.addEventListener('click', playVideoOnClick);


// function playVideoOnClick() {
//     if (!videoToPlay.paused) {
//         videoToPlay.pause();
//         videoButton.innerHTML = "Play Video";
//     } else {
//         videoToPlay.play();
//         videoButton.innerHTML = "Pause";
//     }
// }

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const videoToPlay = document.getElementById("video-home-cover");

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        videoToPlay.play();
    } else {
        btn.classList.remove('slide');
        videoToPlay.pause();
    }
})



