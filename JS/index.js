setInterval(showTime, 1000);

function showTime() {
    let cHour = document.getElementById('cHour');
    let cMin = document.getElementById('cMin');
    let cSec = document.getElementById('cSec');
    let ampm = document.getElementById('ampm');
    let am_pm = 'am';
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    if (hour > 11) {
        am_pm = 'pm';
    } else {
        am_pm = 'am';
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    cHour.innerHTML = `<p>${hour}</p>`;
    cMin.innerHTML = `<p>${minute}</p>`;
    cSec.innerHTML = `<p>${second}</p>`;
    ampm.innerHTML = am_pm;
}

setInterval(showDate, 1000);

function showDate() {
    let day = document.getElementById("day");
    let date = document.getElementById("date");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let date1 = d.getDate();
    let month1 = d.getMonth() + 1;
    let year1 = d.getFullYear();
    date1 = date1 < 10 ? "0" + date1 : date1;
    month1 = month1 < 10 ? "0" + month1 : month1;
    day.innerHTML = `<p id="days">${days[d.getDay()]}</p>`;
    date.innerHTML = `<p>${date1}</p>`;
    month.innerHTML = `<p>${month1}</p>`;
    year.innerHTML = `<p>${year1}</p>`;
}

function addZero(n) {
    return (n < 10 ? "0" + n : n);
}


function hourList() {
    let aHour = document.getElementById('aHour');
    let hour = 12;
    for (let i = 1; i <= hour; i++) {
        aHour.options[aHour.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
hourList();

function minList() {
    let aMin = document.getElementById('aMin');
    let min = 59;
    for (let i = 0; i <= min; i++) {
        aMin.options[aMin.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minList();

function secondList() {
    let aSec = document.getElementById('aSec');
    let second = 59;
    for (let i = 0; i <= second; i++) {
        aSec.options[aSec.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secondList();

let sound = new Audio("alarm.mp3");
sound.loop = true;

function setAlarm() {
    let bell = document.getElementById("bell");
    bell.style.display = "block";
    let alarmTime = document.getElementById("alarmTime");
    alarmTime.style.display = "block";

    let aHour = document.getElementById('aHour');
    let aMin = document.getElementById('aMin');
    let aSec = document.getElementById('aSec');
    let ap = document.getElementById('aAMPM');

    let selectedHour = aHour.options[aHour.selectedIndex].value;
    let selectedMin = aMin.options[aMin.selectedIndex].value;
    let selectedSec = aSec.options[aSec.selectedIndex].value;
    let selectedAP = ap.options[ap.selectedIndex].value;
    selectedHour = selectedHour < 10 ? "0" + selectedHour : selectedHour;
    selectedMin = selectedMin < 10 ? "0" + selectedMin : selectedMin;
    selectedSec = selectedSec < 10 ? "0" + selectedSec : selectedSec;
    alarmTime.innerHTML = `<h5>${selectedHour}:${selectedMin}:${selectedSec} ${selectedAP}</h5>`
    setInterval(() => {
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        let app = "am";
        if (hour > 11) {
            app = "pm";
        } else {
            app = "am";
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        addZero(hour);
        addZero(minute);
        addZero(second);


        if (hour == selectedHour && minute == selectedMin && second == selectedSec && app == selectedAP) {
            sound.play();
        }
    }, 1000);
}

function resetAlarm() {
    let bell = document.getElementById("bell");
    bell.style.display = "none";
    let alarmTime = document.getElementById("alarmTime");
    alarmTime.style.display = "none";
    sound.pause();
    sound.currentTime = 0
}