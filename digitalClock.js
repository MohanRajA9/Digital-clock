const hourSpan = document.querySelector(".hour");
const minuteSpan = document.querySelector(".minute");
const secondSpan = document.querySelector(".second");

const amSpan = document.querySelector(".am");
const pmSpan = document.querySelector(".pm");

setInterval(() => {

    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    if(hour > 11){
        pmSpan.className = "pm active";
        amSpan.className = "am";
        if(hour>12){
            hourSpan.innerText = (hour - 12).toString().padStart(2, 0);
        }else{
            hourSpan.innerText = hour.toString().padStart(2, 0);
        }
    }else{
        amSpan.className = "am active";
        pmSpan.className = "pm";
        if(hour==0){
            hourSpan.innerText = hour + 12;
        }else{
            hourSpan.innerText = hour.toString().padStart(2, 0);
        } 
    }
    minuteSpan.innerText = minute.toString().padStart(2, 0);
    secondSpan.innerText = second.toString().padStart(2, 0);    
} , 1000);

