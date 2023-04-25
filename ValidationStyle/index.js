const pass = document.getElementById('pass');
const button = document.getElementById('button');
const email = document.getElementById('email');
const validity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var passStatus = false;
var emailStatus = false;

function passwordInput(text){
    if(text.value.length < 5){
        pass.classList.remove('password-error')
        setTimeout(function(){
            pass.classList.add('password-error')
            button.classList.replace('button','disable-button')
            passStatus = false
        },10)
    }else if(text.value.length > 5){
        pass.classList.remove('password-error')
        button.classList.replace('disable-button','button')
        passStatus = true
    }
    console.log(passStatus)
}

function emailInput(text){
    if(text.value.match(validity)){
        emailStatus = true
    }else{
        emailStatus = false
    }
}

function showAlert(){
    if(emailStatus === true && passStatus === true){
        document.getElementById('hide').style.visibility = "visible"
    }
}