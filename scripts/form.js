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

//pw = password 
//cpw = comfirm password, while fb = feedback to be recived in the div tag

const pw = document.getElementById('password');
const cpw =document.getElementById('cpassword');
const fb = document.getElementById('meg');

cpw.addEventListener('focusout', password);

function password(){
    if (pw.value != cpw.value){
        pw.value ='';
        cpw.value ='';
        pw.focus
        fb.textContent="values do not match try again !"
    }
    else{
        window.location.href = "./record.html";
        fb.textContent=''

    }
}

document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("range");
    const rangeValue = document.getElementById("rangevalue");

    // Function to update the displayed range value
    function updateRangeValue() {
        rangeValue.textContent = rangeInput.value;
    }

   
    updateRangeValue();

    rangeInput.addEventListener("input", updateRangeValue);
});




