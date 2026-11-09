const btnEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");

const animeImgEl = document.querySelector(".anime-img");

const animeNameEl = document.querySelector(".anime-name");

// api: https://nekos.best/api/v2/neko?utm_source=chatgpt.com
// website get img loading animation svg: https://loading.io/

btnEl.addEventListener("click", async function (){
    try{
        // before get api data
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "img animation loading io.svg";

        const response = await fetch("https://nekos.best/api/v2/neko?utm_source=chatgpt.com");

        const data = await response.json();
        
        // after get api data
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        
        //
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.results[0].url;
        animeNameEl.innerText = data.results[0].artist_name;
    }catch(error){
        console.log(error);
        btnEl.disabled = false
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happend, please try again";
    }
})