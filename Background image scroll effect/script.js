const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage(){
    // pageYOffset là đã cuộn của trang, thí dụ: tui cuộn 100px thì pageYOffset là 100px, mình chia để lấy ra số nhỏ để opacity 1 trừ đi thôi để nó mờ từ từ, có thể thay đổi số để chia thay cho số 900
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;

    // số 110 là số background size, nhớ phải cùng với bên css nhoaaaa 
    bgImageEl.style.backgroundSize = 110 - window.pageYOffset / 12 + "%";
}