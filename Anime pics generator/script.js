const btnEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");

const animeImgEl = document.querySelector(".anime-img");

const animeNameEl = document.querySelector(".anime-name");

// api: https://nekos.best/api/v2/neko?utm_source=chatgpt.com
btnEl.addEventListener("click", async function (){
    try{
        const response = await fetch("https://nekos.best/api/v2/neko?utm_source=chatgpt.com");

        const data = await response.json();
        console.log(data);
        
        //
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.results[0].url;
        
    }catch(error){
        throw new Error(error);
    }
})