const menuToggle = document.querySelector('.menu-toggle');
const hamburgerNav = document.querySelector('#hamburger-nav');
const darken = document.querySelector('.darken');

function toggleAction(){
    menuToggle.classList.toggle('isActive');
    hamburgerNav.classList.toggle('hidden');
    darken.classList.toggle('show');
}

hamburgerNav.addEventListener("click", (e) =>{
    if (e.target === e.currentTarget){
        toggleAction();
    }
})
