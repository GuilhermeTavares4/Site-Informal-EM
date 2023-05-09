const menuToggle = document.querySelector('.menu-toggle');
const hamburgerNav = document.querySelector('#hamburger-nav');
const darken = document.querySelector('.darken');


function toggleAction(){
    //let state = getComputedStyle(hamburger, 'left');
    //console.log("cu");
    menuToggle.classList.toggle('isActive');
    hamburgerNav.classList.toggle('hidden');
    darken.classList.toggle('show');
}
