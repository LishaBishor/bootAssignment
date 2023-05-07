var eml=document.getElementById("email");
var error1=document.getElementById("err1")
var password=document.getElementById("pass");
var error2=document.getElementById("err2")
let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
    if(regex.test(eml.value)){
        error1.innerText='email valid';
        error1.style.color='green';
        alert("email valid")
        return true;
        
    }
    else{
        error1.innerText='not valid'
        error1.style.color='red'
        alert("please enter a valid email)")
        return false;
    }
}
let regex2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
function validate2(){
    if(regex2.test(password.value)){
        error2.innerText='password valid';
        error2.style.color='green';
        alert("password valid")
        return true;
        

    }
    else{
        error2.innerText='not valid'
        error2.style.color='red'
        alert("poor password, enter a valid one")
        return false;
    }
}
  