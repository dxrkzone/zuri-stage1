// alert(7)
// Function to update the current UTC time

// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;
}
function updateNigerianTime() {
    
  const utcTime = new Date();


  const nigerianTime = new Date(utcTime.getTime() + (3600000 * 1)); // Adding 1 hour to UTC

 
  const formattedTime = nigerianTime.toISOString().slice(11, -1);

 
  document.getElementById('time').textContent = formattedTime;
}

updateNigerianTime();
setInterval(updateNigerianTime, 1);


updateDayOfWeek();

// Set intervals to update the time and day of the week every second
setInterval(updateUTCTime, 1000);
setInterval(updateDayOfWeek, 1000);