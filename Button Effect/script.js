const btnEl = document.querySelector(".button");

btnEl.addEventListener("mouseover", (e) => {
    // mouseover là sự kiện khi chuột đi vào phần tử
    /**
     * e.pageX là tọa độ của con chuột tính từ mép trái, khi nó vào button thì nó chạy sự kiện mouseover nên đó là vị trí con chuột khi vào button
     */
    const x = (e.pageX - btnEl.offsetLeft);
    const y = (e.pageY - btnEl.offsetTop);
    
    //console.log(e.pageX); // cái này thay đổi theo vị trí chuột mình hover và button theo chiều ngang, có thể là mép trái, dưới button hay qua từ mép phải
    //console.log(btnEl.offsetLeft);// cái này là mặc định, 1 số không đổi, nó ăn theo vị trí của thằng cha relative của nó
    
    //
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});