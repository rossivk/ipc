
// Humburger icon toggle

const navHamburgerIconToggle = document.getElementById('nav-hamburger-icon-toggle');
const navContainer = document.querySelector('.nav-container');
const navLinkWrapper = document.querySelector('.nav-link-wrapper');

navHamburgerIconToggle.addEventListener('click', () => {
    navHamburgerIconToggle.classList.toggle('active');
    navLinkWrapper.classList.toggle('show-links');

})

///////////////////////////////////////////////

// change colour on menu link to show page is current

let links = document.getElementsByClassName('nav-link-wrapper')[0].children;

for (let i = 0; i < links.length; i++) {
    let linkArray = links[i].baseURI.split('/');

    if (linkArray.includes(links[i].textContent.toLocaleLowerCase())) {
        links[i].classList.add('header-active');
    }

}

