function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //using backticks: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //using backets: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    if(!audio) return;
    audio.currentTime = 0; //allows sound to play quickly by resetting play time before execution
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // look for the end of transform only
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);