 var toggleNight = document.getElementById('night-mode');
  toggleNight.onclick = function() {
    var calendarWindow = document.getElementById('calendar-app');
    calendarWindow.classList.toggle('dark');
  }