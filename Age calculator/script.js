const btnEl = document.querySelector(".btnCalculator");

const inputEl = document.getElementById("birthday");

const result = document.getElementById("result");

btnEl.addEventListener("click", calculateAge);

function calculateAge() {
    //2026-11-04
    if (inputEl.value === "") {
        alert("Please enter your birthday");
    }
    else {
        const birthYear = new Date(inputEl.value).getFullYear();
        const birthMonth = new Date(inputEl.value).getMonth();
        const birthDay = new Date(inputEl.value).getDate();

        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();

        let age = 0;
        if (birthYear < year) {
            age = year - birthYear;

            if (birthMonth === month && birthDay < day) {
                age++
                result.innerText = `You are is ${age} years old`
            }
            else if (birthMonth === month && birthDay > day) {
                age--;
                result.innerText = `You are is ${age} years old`
            }
            else {
                result.innerText = `You are is ${age} years old`
            }
        }else if(birthYear > year || birthYear === year){
            alert("Incorect Data Years");
        }
    }
}