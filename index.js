let email = document.getElementById('email');
let error = document.getElementById('error');
let button = document.getElementById('sub');
let small = document.getElementById('mass');


document.forms[0].onsubmit = function(e)
{

let emailValid = false;


    if(email.value !== "")
    {
        emailValid = true;
    }

    if(email.value === "")
    {
        e.preventDefault();
        small.classList.remove("hide");
        error.classList.remove("hide");
    }
}