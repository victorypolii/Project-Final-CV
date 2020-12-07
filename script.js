// let loading = document.getElementById('loading');
// window.addEventListener('load',function(){
//     loading.style.display="none";
// });

function validation() {
    let name = document.getElementById("name").value; 
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error_message");
    let textError;

    error_message.style.padding="5px";

    if (name.length <3) {
        textError = "Please Enter Your Name Correctly!";
        errorMessage.innerText = textError;
        return false;
    }
    if (subject.length <3) {
        textError = "Please Enter The Correct Subject!";
        errorMessage.innerText = textError;
        return false;
    } 
    if (email.indexOf("@") == -1||email.length<10) {
        textError = "Please Enter Valid Email!";
        errorMessage.innerText = textError;
        return false;
    } 
    if (message.length<=10) {
        textError = "Please Enter Message than 10 character!";
        errorMessage.innerText = textError;
        return false;
    }
    // alert("Form Has Been Submietted!");
    textError="Form Has Been Submietted!";
    errorMessage.innerText = textError;
    document.getElementById("my_contact").submit();
    document.getElementById("my_contact").reset();
    //error_message.style.padding="0px";
    // name = document.getElementById("name").value=""; 
    // subject = document.getElementById("subject").value="";
    // email = document.getElementById("email").value="";
    // message = document.getElementById("message").value="";
    return true;
}

 setTimeout(showWelcome,2000);
let welcoming=document.getElementById("welcome");
function showWelcome() {
    welcoming.style.display="none";
}