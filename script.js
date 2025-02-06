setInterval(() => {
    let d = new Date();
    let hour = String(d.getHours()).padStart(2, '0');
    let minute = String(d.getMinutes()).padStart(2, '0');
    let second = String(d.getSeconds()).padStart(2, '0');
    let year = d.getFullYear();
    console.log(year);
    
    document.querySelector("#hour").textContent = hour + " :";
    document.querySelector("#minute").textContent = minute + " :";
    document.querySelector("#seconde").textContent = second;
}, 1000);