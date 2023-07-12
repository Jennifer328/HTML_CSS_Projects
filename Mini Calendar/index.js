const monthEl = document.querySelector(".month");
const weekEl = document.querySelector(".week");
const dayEl = document.querySelector(".today");
const yearEl = document.querySelector(".year");



const date = new date();
const month = date.toLocaleString("en",{
    month: "long"
});
const week = date.toLocaleString("en", {
    week:"long"
});
const day = new Date().getDate();
const year = new Date().getFullYear();


monthEl.innerHTML = month;
weekEl.innerText = week;
dayEl.innerText = day;
yearEl.innerText = year;
