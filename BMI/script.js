const ipHeight = document.getElementById("height");
const ipWeight = document.getElementById("weight");
const btnBMI = document.getElementById("btnBMI");

const ipResultBMI = document.getElementById("resultBMI");
const evaluteBMI = document.querySelector(".evaluteBMI");

//
btnBMI.addEventListener("click", calculatorBMI);

function calculatorBMI(){
    //chia 100 vì mình nhập là 170 mà mình tính là met chứ kh phải cm nên là phải chia 100.
    const height = Number(ipHeight.value) / 100;
    const weight = Number(ipWeight.value);
    let bmi = 0;

    // tính bmi
    if(height > 0 && weight > 0){
        // không chia 100 thì nhân 10000 ở dưới này.
        bmi = weight / (height * height);
        ipResultBMI.value = bmi.toFixed(2);
    }else{
        ipResultBMI.value = "Not value input";
    }

    // đánh giá bmi
    evaluteBMI.innerText = "Weight Condition:"
    if(bmi < 18.5){
        evaluteBMI.innerText += " Under weight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        evaluteBMI.innerText += " Normal weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        evaluteBMI.innerText += " Overweight";
    }else if(bmi <= 30){
        evaluteBMI.innerText += " Obesity";
    }else {
        evaluteBMI.innerText += " No evalute :))";
    }
}

