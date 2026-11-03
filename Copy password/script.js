const btnCreatePassword = document.querySelector(".button");
const inputValePassword = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");

btnCreatePassword.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    
    //
    for(let i = 0; i < passwordLength; i++){
        const randomNum = Math.floor( Math.random() * chars.length);

        password += chars.substring(randomNum, randomNum + 1); // vd ra 6 thì lấy giá trị vị trí 5 + 1 là vị trí số 6 vì nó bắt đầu chạy từ số 0

        // console.log(randomNum, password);
    }

    /*
    Math.random() cho ra số 0,.... 
    chars.length là giá trị của chuỗi chars
    => 2 cái nhân nhau sẽ ra số vd: 33,... 56,...
    * để bỏ các số sau dấu , thì dùng Math.floor, thì nó sẽ ra số ngẫu nhiên từ 0 > cuối giá trị của chuỗi chars
    */

    //

    inputValePassword.value = password;
}

function copyPassword(){
    console.log(inputValePassword.value);
    inputValePassword.select(); // là bấm xong thì nó sẽ bô xanh vùng dữ liệu
    inputValePassword.setSelectionRange(0, 9999); // dùng cho thiết bị di động

    navigator.clipboard.writeText(inputValePassword.value);
}
