const btnPrevEl = document.querySelector(".prev");

const btnNextEl = document.querySelector(".next");

const imgContainerEl = document.querySelector(".image-container");


const imgsEl = document.querySelectorAll("img");
const imgsLength = imgsEl.length; //4

//
let currentImg = 0;

btnNextEl.addEventListener("click", () => {
    currentImg++;
    updateImg();
})

btnPrevEl.addEventListener("click", () => {
    currentImg--;
    updateImg();
})


//
function updateImg() {
    // Nếu nó đi đến cuối thì nó quay lại từ đầu
    // nếu nó ở đầu mà đi ngược thì quay lại chỗ cuối
    if (currentImg === imgsLength) {
        currentImg = 0;
    } else if(currentImg < 0){
        currentImg = imgsLength - 1;
    }

    // Chạy theo logic, chỉ thay đổi currentImg và logic click khi click ảnh ở đầu hoặc cuối
    imgContainerEl.style.transform = `translateX(-${500 * currentImg}px)`;
}
