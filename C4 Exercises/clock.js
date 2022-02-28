const clock = document.querySelector(".clock");
const month = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];

function updateClock() {
    let now = new Date();
    let y = now.getFullYear();
    let mo = now.getMonth();
    let d = now.getDay();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    clock.innerHTML = `It's currently ${h}:${m.toLocaleString(`en-US`,{minimumIntegerDigits: 2, useGrouping: false})}:${s.toLocaleString(`en-US`,{minimumIntegerDigits: 2, useGrouping: false})}, on ${month[mo]} ${d}, ${y}.`;
    console.log(`time is ${h}:${m}:${s} on ${mo}/${d}/${y}`);
}
setInterval(updateClock, 1000);