import * as song from "./songs.js";
import * as openMenu from "./menuOpen.js";

// Declare variables
let body = document.getElementById('body')

openMenu.button.addEventListener('click', ev => {
    openMenu.openMenu()
    console.log('hey')
})

console.log(song.songs);

