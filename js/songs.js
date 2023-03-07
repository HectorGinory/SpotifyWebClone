// Declare variables
let songs =  []

// Class creator
class song {
    constructor (name, author, imgSrc, album) {
        this.name = name;
        this.author = author;
        this.imgSrc = imgSrc;
        this.album = album;
    }
}

function newSong (name, author, imgSrc, album) {
    let newSong = new song(name, author, imgSrc, album);
    songs.push(newSong);
}

newSong ('Photograph', 'Ed Sheeran', null, 'plus');
newSong ('Photograph', 'Ed Sheeran', null, 'plus');
newSong ('Photograph', 'Ed Sheeran', null, 'plus');
newSong ('Photograph', 'Ed Sheeran', null, 'plus');

function songsDisplay(songs) {
    let songCard = document.createElement('')
}
export {newSong, songs, songsDisplay};

