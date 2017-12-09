const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    if (secondsDegrees < 91) {
        document.getElementsByClassName('hand')[2].style.transitionDuration = '0s';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
    else {
        document.getElementsByClassName('hand')[2].style.transitionDuration = '0.3s';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360)+90;
    if (minutesDegrees < 91) {
        document.getElementsByClassName('hand')[1].style.transitionDuration = '0s';
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }
    else {
        document.getElementsByClassName('hand')[1].style.transitionDuration = '0.3s';
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360)+90
    if (hoursDegrees < 91) {
        document.getElementsByClassName('hand')[0].style.transitionDuration = '0s';
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    else {
        document.getElementsByClassName('hand')[0].style.transitionDuration = '0.3s';
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
}

setInterval(setDate, 1000);