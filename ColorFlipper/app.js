const colors = ["aquamarine", "rosybrown", "moccasin", "teal", "coral", " violet"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
   const randomNumber = getRandomNumber();

   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * (colors.length));
};

