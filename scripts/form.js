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

const menu = document.querySelector('.hambuger');

const navBar = document.getElementById('menu');

menu.addEventListener('click', () => {
   navBar.classList.toggle('active');
    menu.classList.toggle('show');
});