let countDown = new Date("05/09/2022");

let $days = document.getElementById('days');
let $hours = document.getElementById('hours');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');

setInterval(function() {
    var now = new Date();
    var timeLeft = (countDown - now) / 1000;
    updateclock(timeLeft);
}, 1000);

function updateclock(remainingTime) {
    let days = Math.floor(remainingTime / 86400);
    remainingTime -= days * 86400;

    let hours = Math.floor(remainingTime / 3600) % 24;
    remainingTime -= hours * 3600;

    let minutes = Math.floor(remainingTime / 60) % 60;
    remainingTime -= minutes * 60;

    let seconds = Math.floor(remainingTime % 60);

    $days.innerHTML = Number(days);
    $hours.innerHTML = Number(hours);
    $minutes.innerHTML = Number(minutes);
    $seconds.innerHTML = Number(seconds);
}

function Number(number) {
    return number < 10 ? "0" + number : number;
}