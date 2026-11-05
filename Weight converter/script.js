const ipWeight = document.getElementById("ipWeight");
const rsWeight = document.querySelector(".resultWeight");

const pounds = 0.4536;
let resultWeight = 0;
//

ipWeight.addEventListener("input", calculateWeight);
function calculateWeight(){
    const kg = Number(ipWeight.value);
    resultWeight = (kg * 0.4536).toFixed(3);
    rsWeight.innerText = "Your weight in kg is: " + resultWeight;
}
