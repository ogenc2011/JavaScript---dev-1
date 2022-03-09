let Name = prompt('Lütfen Adınızı Giriniz')
let myName = document.querySelector('#myName')
myName.innerHTML = Name

function showTime(){

    let zaman = new (Date)
    let myClock = document.querySelector("#myClock")

    switch (zaman.getDay()) {
       case 0:
          day = "Pazar";
          break;
       case 1:
          day = "Pazartesi";
          break;
       case 2:
          day = "Salı";
          break;
       case 3:
          day = "Çarşamba";
          break;
          case 4:
             day = "Perşembe";
             break;
          case 5:
             day = "Cuma";
             break;
          case 6:
             day = "Cumartesi";
             break;
    }
          myClock.innerHTML = (`${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()} ${day}`)



}
setInterval(function(){showTime()});