const targetDate = new Date("28 aug 2023, 00:00:00").getTime();
const timer = setInterval(() => {
const now = new Date().getTime();
const distance = targetDate - now;
// Calculate days, hours, minutes, and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "Days <br> "  + hours + " hrs : " + minutes + " min : " + seconds + " sec";
 if (distance < 0) {
    clearInterval(timer);
    console.log("Countdown finished");
    }
}, 1000);
