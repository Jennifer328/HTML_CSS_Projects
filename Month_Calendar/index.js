
const monthElement = document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1; //js starts from Sunday

// console.log(firstDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]



monthElement.innerText = months[monthInx];
fullDateElement.innerText = new Date().toDateString();



let days = "";


for (let i = firstDay; i > 0; i--) {   //order matters
    days += `<div class="empty"></div>`;
  }


for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }




daysElement.innerHTML = days;