const button = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");

button.addEventListener("click",()=>{
  if(button.classList.contains("pause")){
      button.classList.remove("pause");
      video.play();
      fa.classList.add("fa-pause");
      fa.classList.remove("fa-play");
  }else{
    button.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
    

  }
});

window.addEventListener("load", ()=>{
    preloader.style.zIndex = "-2";
})