const btn = document.querySelector(".btn");

const video = document.querySelector(".background-video");

const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () =>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play(); 
        btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }else{
        btn.classList.add("pause");
        video.pause();
        btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-2";
})