const buttons = document.querySelectorAll("button");

const inputCaculator = document.getElementById("result");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        const btnValue = buttons[i].textContent;
        if(btnValue === "C"){
            clearResult();
        } else if(btnValue === "="){
            calculateResult();
        } else{
            appendValue(btnValue);
        }
    });
}

function clearResult(){
    inputCaculator.value = "";
}

function calculateResult(){
    // eval là hàm của js để sử lý chuỗi ký tự như 1 chuỗi toán học
    inputCaculator.value = eval(inputCaculator.value);
}

function appendValue(btnValue){
    inputCaculator.value += btnValue;
}