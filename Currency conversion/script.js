const currencyFirst = document.getElementById("curency-first");

const worthFirst = document.getElementById("worth-first");

const currencySecond = document.getElementById("curency-second");

const worthSecond = document.getElementById("worth-second");

const exchangeRate = document.getElementById("exchange-rate");

// chạy lần đầu để load dữ liệu exchange-rate
updateRate();
//
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/d7f92cd1ef02e27993230fba/latest/${currencyFirst.value}`)
    .then((res) => res.json())
    .then((data) =>{
        const rate = data.conversion_rates[currencySecond.value]

        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;

        worthSecond.value = (worthFirst.value * rate).toFixed(2);
        // toFixed lấy 2 số đầu sau dấu ,
    });
}

currencyFirst.addEventListener("change", updateRate);

currencySecond.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);

//api exchange-rate(https://www.exchangerate-api.com/): https://v6.exchangerate-api.com/v6/d7f92cd1ef02e27993230fba/latest/USD