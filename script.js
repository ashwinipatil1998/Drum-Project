// Mapping keys to corresponding audio files and div elements
const keyMap = {
    'w': 'sounds/w.mp3',
    'a': 'sounds/a.mp3',
    's': 'sounds/s.mp3',
    'd': 'sounds/d.mp3',
    'j': 'sounds/j.mp3',
    'k': 'sounds/k.mp3',
    'l': 'sounds/l.mp3'
};

// Function to play the corresponding audio
function playSound(key) {
    const audio = new Audio(keyMap[key]);
    audio.play();
}

// Event listener for clicks
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const key = this.textContent; // Get the text inside the div, which corresponds to the key
        playSound(key);
    });
});

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase(); // Get the key pressed and convert to lower case
    if (keyMap[key]) {
        playSound(key);
    }
});
