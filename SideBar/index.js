const bar = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingbutton = document.querySelector(".fa-xmark");

bar.addEventListener(("click"), ()=>{
    sidebar.classList.toggle("show-sidebar");
});

closingbutton.addEventListener(("click"),()=>{
   sidebar.classList.remove("show-sidebar");
});

