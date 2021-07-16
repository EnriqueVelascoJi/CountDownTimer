const newYears = '1 Jan 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}
function display(days, hours, minutes, seconds) {

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
function countDown() {

    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const diff = (newYearDate - currentDate);
    const days = Math.floor(diff / 1000 / 3600 / 24);

    const hours = formatTime(24 - currentDate.getHours());
    const minutes = formatTime(59 - currentDate.getMinutes());
    const seconds  = formatTime(59 - currentDate.getSeconds());

    display(days, hours, minutes, seconds);

}

setInterval(() => {
    countDown();
}, 1000);