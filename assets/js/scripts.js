function setTime(){

var text2 = document.getElementById("time");
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var dn = "pm";
if (hours<12)
   dn="am";
if (minutes<=9)
   minutes="0"+minutes;
if (seconds<=9)
   seconds="0"+seconds;

   text2.innerHTML = hours + ':' + 
   minutes + ':' + seconds+ "<bn> ";
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

// window.onload = function() {
//    fetch('menu.html')
//      .then(response => response.text())
//      .then(data => {
//        document.getElementById('menu-container').innerHTML = data;
//      });
//  };