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

// const toggleBtn = document.getElementById('dark-mode-toggle');
// const body = document.body;
// console.log(toggleBtn)

// the navbar toggle script
const menu = document.querySelector('.hambuger');

const navBar = document.getElementById('menu');

menu.addEventListener('click', () => {
   navBar.classList.toggle('active');
    menu.classList.toggle('show');
});
// for the dicover page
let lastVisit = localStorage.getItem('lastVisit');
let currentDate = new Date();

if (!lastVisit) {
   document.querySelector('.message').innerHTML = "Welcome! Let us know if you have any questions.";

    localStorage.setItem('lastVisit', currentDate.toISOString().split('T')[0]);
} else {
    let lastVisitDate = new Date(lastVisit);
    let timeDiff = Math.floor((currentDate - lastVisitDate) / (1000 * 3600 * 24));

    if (timeDiff < 1) {
        document.querySelector('.message').innerHTML = "Back so soon! Awesome!";
    } else {
        let dayText = timeDiff === 1 ? 'day' : 'days';
        document.querySelector('.message').innerHTML = `You last visited ${timeDiff} ${dayText} ago.`;
    }

    localStorage.setItem('lastVisit', currentDate.toISOString().split('T')[0]);
}


document.getElementById("timestamp").value = new Date().toISOString();
