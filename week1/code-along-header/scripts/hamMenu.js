const hambutton = document.querySelector('#ham-bin');
const navBar = document.querySelector('#nav-bar');
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
});


hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    navBar.classList.toggle('show');
});
