window.onload = function() {
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var dateCells = document.querySelectorAll('.day');
  for (let cell of dateCells) {
    if (cell.innerText == currentDay) {
      if (!cell.parentElement.classList.contains('off')) {
        cell.classList.toggle('today');
      }
    }
  }
  var toggleNight = document.getElementById('night-mode');
  toggleNight.onclick = function() {
    var calendarWindow = document.getElementById('calendar-app');
    calendarWindow.classList.toggle('dark');
  }
}
