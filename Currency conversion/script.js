const cunrencyFirst = document.getElementById("curency-first");

const worthFirst = document.getElementById("worth-first");

const cunrencySecond = document.getElementById("curency-second");

const worthSecond = document.getElementById("worth-second");

const exchangeRate = document.getElementById("exchange-rate");

//
function updateRate(){
    console.log("called");
    
}

cunrencyFirst.addEventListener("change", updateRate);

cunrencySecond.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);