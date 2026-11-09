const imgContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImages();
});

//
function addNewImages(){ 
    // Quan trọng là mình random cái số ra thôi, muốn chạy bao nhiêu hình thì mình dùng vòng lặp thôi
    for(let i = 0; i < 10; i++){
        const newImgEl = document.createElement("img")
        
        newImgEl.src = `https://picsum.photos/300/?random=${Math.floor(Math.random() * 2000)}`;
    
        imgContainerEl.appendChild(newImgEl);
    }
}