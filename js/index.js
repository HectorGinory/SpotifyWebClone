// Declare variables
let body = document.getElementById('body')

function openMenu() {
    if (document.getElementsByClassName('menu-open').length == 1) {
        body.classList.remove('menu-open');
        body.classList.add('menu-closed');
    } else {
        body.classList.remove('menu-closed');
        body.classList.add('menu-open');
    }
}