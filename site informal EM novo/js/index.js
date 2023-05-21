const menuToggle = document.querySelector('.menu-toggle');
const hamburgerNav = document.querySelector('#hamburger-nav');
const darken = document.querySelector('.darken');

function toggleAction(){
    menuToggle.classList.toggle('isActive');
    hamburgerNav.classList.toggle('hidden');
    darken.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');

}

hamburgerNav.addEventListener("click", (e) =>{
    if (e.target === e.currentTarget){
        toggleAction();
    }
})

const links = document.querySelectorAll(".link")

links.forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        let width = e.target.getBoundingClientRect().width;
        aaa =   document.querySelector(e.currentTarget);
        console.log(aaa)
    })
});
