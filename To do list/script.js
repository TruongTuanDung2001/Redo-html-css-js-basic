const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list")) || [];

//
renderTask();

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList();
})

// thêm task, sử lý sự kiện click nút
function toDoList(){
    if(inputEl.value !== ""){
        let newTask = inputEl.value;

        const liEl = document.createElement("li");
        liEl.innerText = newTask;
        ulEl.appendChild(liEl);

        inputEl.value = "";

        const checkBtnEl = document.createElement("div");
        checkBtnEl.innerHTML = `
            <i class="fa-solid fa-square-check"></i>
        `
        liEl.appendChild(checkBtnEl);

        const trashBtnEl = document.createElement("div");
        trashBtnEl.innerHTML = `
            <i class="fa-solid fa-trash"></i>
        `
        liEl.appendChild(trashBtnEl);

        // sử lý nút
        checkBtnEl.addEventListener("click", () => {
            liEl.classList.toggle("checked");
            updateLocalStorage();
        })

        trashBtnEl.addEventListener("click", () => {
            liEl.remove();
            updateLocalStorage()
        })

        updateLocalStorage();
    }
}

// cập nhật vào bộ nhớ local
function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach(e => {
        list.push({
            name: e.innerText,
            checked: e.classList.contains("checked")
        })
    });
    localStorage.setItem("list", JSON.stringify(list));
}

// hiện task
function renderTask(){
    list.forEach(task => {
        // thêm task
        const liEl = document.createElement("li");
        liEl.innerText = task.name;
        ulEl.appendChild(liEl)
        
        const checkBtnEl = document.createElement("div");
        checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`
        liEl.appendChild(checkBtnEl);

        const trashBtnEl = document.createElement("div");
        trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        liEl.appendChild(trashBtnEl);

        // kiểm tra task và sử lý task khi click vào nút
        if(task.checked){
            liEl.classList.add("checked");
        }

        checkBtnEl.addEventListener("click", () => {
            liEl.classList.toggle("checked");
            updateLocalStorage();
        });

        trashBtnEl.addEventListener("click", () => {
            liEl.remove();
            updateLocalStorage();
        });
    })
}