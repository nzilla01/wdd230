// set the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;


const name = "Okon Nsikak";
const country = "Nigeria";
const state = "Akwa Ibom State";
const currentYear = new Date().getFullYear();

// Create the full copyright string
const copyrightText = `&copy; ${currentYear} 🌸 ${name} 🌸 ${country}, ${state}`;

// Insert the copyright text into the element with id 'copyrightInfo'
document.getElementById("copyrightInfo").innerHTML = copyrightText;

// toggle background color of the body
// Get the button and the body element
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Event listener to toggle dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// the navbar toggle script
const menu = document.querySelector('.hambuger');

const navBar = document.getElementById('menu');

menu.addEventListener('click', () => {
   navBar.classList.toggle('active');
    menu.classList.toggle('show');
});

// get the number of visitors
const counter = document.querySelector('.visitors');
let count = 0;
if(localStorage.getItem('count')) {
  count = localStorage.getItem('count');
  count++;
  localStorage.setItem('count', count);
}
counter.innerHTML = `Number of vistors: ${count}`

