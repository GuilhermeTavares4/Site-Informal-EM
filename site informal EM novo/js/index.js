const hamburger = document.querySelector('#hamburger');

function hamburgerAction(){
    let state = getComputedStyle(hamburger, 'left');
    console.log(state); 
}