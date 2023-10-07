document.addEventListener("DOMContentLoaded", function() {
    const horas = document.querySelector(".hours");
    const minutos = document.querySelector(".minutes");
    const segundos = document.querySelector(".seconds");

    const relogio = setInterval(function time() {
        let dateToday = new Date();
        let hour = dateToday.getHours();
        let minute = dateToday.getMinutes();
        let second = dateToday.getSeconds();

        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;

        horas.textContent = hour;
        minutos.textContent = minute;
        segundos.textContent = second;
    });
});