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
    var currentTime = h + ':' + m + ':' + s;
    document.getElementById('timeShow').innerHTML = currentTime;

    // var swapPlaceholder = document.getElementById('swap-placeholder');
    var visualDateImg = document.getElementById('dayCyclus');

 
    switch (true) { // Switch for image 
        case s >= 0&& s <= 14:
            // swapPlaceholder.classList.remove('switchImage');
            // swapPlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Morning.svg';
            break;
 
        case s >= 15&& s <= 29:
            visualDateImg.src =  'images/Day.svg';
            break;

        case s >= 30&& s <= 44:
            visualDateImg.src =  'images/Evening.svg';
            break;
        case  s >= 45&& s <= 60:
            visualDateImg.src =  'images/Night.svg';
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