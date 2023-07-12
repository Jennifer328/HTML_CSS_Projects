const counterEl = document.querySelector(".counter");
const loadingbarfrontEl = document.querySelector(".loading-bar-front");


let idx = 0;
updateNum();

function updateNum(){
    counterEl.innerText = idx + "%";
    loadingbarfrontEl.style.width = idx + "%";

    idx++;
    
    if(idx < 101){
        setTimeout(updateNum, 50);
    }
}