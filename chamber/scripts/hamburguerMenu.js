const hambutton = document.querySelector('#ham-bin');
const navBar = document.querySelector('#nav-bar');


hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    navBar.classList.toggle('show');

    hambutton.setAttribute(
        'aria-label',
        hambutton.classList.contains('show') ? 'Close navigation menu' : 'Open navigation menu'
    );
});
