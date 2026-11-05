const ipCheckBox = document.getElementById("dark-mode");

const body = document.querySelector("body");

ipCheckBox.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
 // sử dụng ipCheckBox.checked
 function updateBody(){
    if(ipCheckBox.checked){
        body.style.background = "black";
    }
    else{
        body.style.background = "white";
    }
 }

ipCheckBox.addEventListener("input", () => {
    updateBody(), updateLocalStorage()
});

//save mode
function updateLocalStorage(){
    // lưu vào bộ nhớ local
    localStorage.setItem("mode", JSON.stringify(ipCheckBox.checked));
}