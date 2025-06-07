import { text } from "./data/data.js";

displayButtonText(text);

window.addEventListener('keydown', (event) => {
    playAudio(event.key);
});

window.addEventListener('keyup', (event) => {
    removePlayingClass(event.key);
});

document.querySelectorAll('.key').forEach((keyElement) => {
    keyElement.addEventListener('click', () => {
        const key = keyElement.getAttribute('data-key');

        playAudio(key);
        setTimeout(()=>{
            removePlayingClass(key);
        },200);
    })
})

function displayButtonText (text) {
    text.forEach((text) => {
        const {name, type} = text;
        let keyDiv = document.querySelector(`div[data-key="${name.toLowerCase()}"]`);
        if (keyDiv) {
            keyDiv.innerHTML = name + type;
        };
    })
};

function playAudio(key) {
    const keyElement = document.querySelector(`div[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio || !keyElement)return;
    audio.currentTime = 0;
    audio.play();

    keyElement.classList.add('playing');
};

function removePlayingClass(key) {
    const keyElement = document.querySelector(`div[data-key="${key}"]`);

    if (keyElement) {
    keyElement.classList.remove('playing');
    };
};