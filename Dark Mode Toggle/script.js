const ipCheckBox = document.getElementById("dark-mode");

const body = document.querySelector("body");

 // sử dụng ipCheckBox.checked
 function updateBody(){
    if(ipCheckBox.checked){
        body.style.background = "black";
    }
    else{
        body.style.background = "white";
    }
 }

ipCheckBox.addEventListener("input", updateBody);