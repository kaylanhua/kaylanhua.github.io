function setTime() {
    var text2 = document.getElementById("time");
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // JavaScript months are 0-based.
    var day = now.getDate();
    var dn = "PM";
    if (hours < 12)
        dn = "AM";
    if (minutes <= 9)
        minutes = "0" + minutes;
    if (seconds <= 9)
        seconds = "0" + seconds;
    if (month <= 9)
        month = "0" + month;
    if (day <= 9)
        day = "0" + day;

    text2.innerHTML = `it is ${month} ${day} ${year}, ${hours}:${minutes}:${seconds}`;
}

setTime();
setInterval(setTime, 1000);

document.querySelector('.menu-btn').addEventListener('click', function() {
    var menuContent = document.querySelector('.menu-content');
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
    } else {
        menuContent.style.display = 'none';
    }
});

document.querySelector('.menu-btn').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('toggled');
});

