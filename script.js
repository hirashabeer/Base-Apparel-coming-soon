const inputElement = document.querySelector("input");
const button = document.querySelector("button");
let error = document.getElementById("error");
let errormsg = document.getElementById("errormsg")
let successmsg  = document.getElementById("successmsg");
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
button.addEventListener("click" , ()=>{
    let inputValue = inputElement.value;
    if(inputValue.match(regEx)){
        error.style.display="none";
        errormsg.style.display="none";
        successmsg.style.display ="block";
    }else if (inputValue==="" || !inputValue.match(regEx) ){
        successmsg.style.display ="none";
        error.style.display="block";
        errormsg.style.display="block";
    }
});


