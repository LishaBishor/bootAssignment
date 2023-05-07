var eml=document.getElementById("email")
var ph=document.getElementById("phone")
var pass=document.getElementById("Password")
var error1=document.getElementById("err1")
var error2=document.getElementById("err2")
var error3=document.getElementById("err3")

let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate1(){
    if(regex.test(eml.value)){
        
        error1.innerText='email valid';
        error1.style.color='green';
        alert(" email valid");
        return true;
        
        
    }
    else{
        error1.innerText='not valid';
        error1.style.color='red';
        alert("email not a valid one");
        return false;
    }
}
var phoneno1 = /^\d{10}$/;
var phoneno2 =   /^\d{3}\.\d{3}\.\d{4}$/;
var phoneno3=/^\d{3}\-\d{3}\-\d{4}$/;
 var phoneno4=/^\d{3}\s*\d{3}\s*\d{4}$/;
function validate2(){
if (phoneno2.test(ph.value) || phoneno1.test(ph.value) || phoneno3.test(ph.value) || phoneno4.test(ph.value) ){
  error2.innerText='phone number valid';
  error2.style.color='green';
  alert("phone number valid");
  return true;
}
else{
  error2.innerText='Poor-not valid'
       error2.style.color='red'
       alert("not a valid phone number")
       return false;
}
}


 let regex3=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
 
 function validate3(){
   
    if(regex3.test(pass.value)){
        error3.innerText='password valid';
        error3.style.color='green';
        alert("password valid");
        return true;
        
        
    }
    
   
     else{
         error3.innerText='Poor-not valid'
         error3.style.color='red'
         alert("password not valid");
         return false;
     }
 }
// let regex4=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')$/
//  function validateM(){
//        if(regex4.test(pass.value)){
//          error3.innerText='Medium -not valid.'
//       //     error3.style.color='orange'
//            return false;
//      }
//   }
// /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
 
  