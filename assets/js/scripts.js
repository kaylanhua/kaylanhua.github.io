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
    
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    text2.innerHTML = now.toLocaleDateString('en-US', options).toLowerCase().replace(/,/g, '');
}
setTime();
setInterval(setTime, 1000);

// // Wrap all DOM-dependent code in a DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', function() {
//     setTime();
//     setInterval(setTime, 1000);

//     const menuButtons = document.querySelectorAll('.menu-btn');
    
//     menuButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             const menuContent = this.nextElementSibling;
//             if (menuContent && menuContent.classList.contains('menu-content')) {
//                 menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Handle menu buttons
    const menuBtns = document.querySelectorAll('.menu-btn');
    
    menuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const menuContent = this.nextElementSibling;
            if (menuContent) {
                menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
            }
            
            const menu = this.closest('.menu');
            if (menu) {
                menu.classList.toggle('toggled');
            }
        });
    });
});
