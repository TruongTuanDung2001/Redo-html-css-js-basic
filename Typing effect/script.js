const container = document.querySelector('.container');

// careers: nghề nghiệp, Instructor: người hướng dẫn
const careers = ["Web Developer", "Youtuber", 
    "Freelancer", "Instructor"
];

let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText(){
    container.innerHTML = 
    `
        <h1>I'm a ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `
    characterIndex++;
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    setTimeout( updateText, 300)
}