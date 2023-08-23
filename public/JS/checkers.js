// Get the current date
const currentDate = new Date();

// Get day, month, and year components
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const year = currentDate.getFullYear();

// Format the date as DD/MM/YYYY
const formattedDate = `${day}${month}${year}`;

console.log(formattedDate);


// Get the current date
const currentTime = new Date();

// Get hour, minute, and second components
const hours = String(currentTime.getHours()).padStart(2, '0');
const minutes = String(currentTime.getMinutes()).padStart(2, '0');
const seconds = String(currentTime.getSeconds()).padStart(2, '0');

// Format the time as HRS/MINS/SECONDS
const formattedTime = `${hours}${minutes}${seconds}`;

console.log(formattedTime);

console.log(formattedDate + formattedTime);