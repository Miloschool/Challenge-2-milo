function todayDay() {
    var getDateForDay = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[getDateForDay.getDay()];
    document.getElementById('todayShow').innerHTML = dayName;
};
todayDay();


function todayTime() {
    var getDateForTime = new Date();
    var h = getDateForTime.getHours();
    var m = getDateForTime.getMinutes();
    var s = getDateForTime.getSeconds();
    m = checkTime(m); // Tijden apart gemaakt voor checking time om 0 toe te voegen bij tijden met alleen 1 cijfer
    s = checkTime(s); // Tijden apart gemaakt voor checking time om 0 toe te voegen bij tijden met alleen 1 cijfer

    var currentTime;
    if (screen.width <= 425) { // Time placeholder width
        currentTime = h + ':' + m;
    } else {
        currentTime = h + ':' + m + ':' + s;
    }
     document.getElementById('timeShow').innerHTML = currentTime;



    var swapForPlaceholder = document.getElementById('swapImagePlaceholder');
    var visualDateImg = document.getElementById('dayCyclus');

    switch (true) { // check time
        case s >= 0 && s <= 14:
            swapForPlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Morning.svg';
            break;
        case s >= 16 && s <= 29:
            swapForPlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Day.svg';
            break;
        case s >= 31 && s <= 44:
            swapForPlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Evening.svg';
            break;
        case s >= 46 && s <= 58:
            swapForPlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Night.svg';
            break;
        default:
            swapForPlaceholder.classList.remove('switchImage');
            break;
    }
    setTimeout(todayTime, 500);
}

todayTime();


function todayDate() {
    var getTodayDate = new Date();
    var y = getTodayDate.getFullYear().toString().substr(-2);
    var m = getTodayDate.getMonth();
    var d = getTodayDate.getDate();
    y = checkTime(y);
    m = checkTime(m);
    d = checkTime(d);
    document.getElementById('dateShow').innerHTML = d + '/' + m + '/' + y;
}

todayDate();


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // Voegt 0 achter een cijfer 
    return i;
}