/***********************  JS Clock Ödev-1 ***********************/


const stars = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-stars" viewBox="0 0 16 16">
<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
</svg>`

let userName = prompt("Lütfen İsminizi Giriniz: ") // prompt ile kullanıcıdan isim aldım. 
!userName ? alert("İsim Girmediniz :(") : " "


let divInfo = document.querySelector(".text1")     // text-1 class'ı ile div'e ulaştım 
let textInfo = document.querySelector("#myName")    // myName id'si ile span'a ulaştım.
let newClass = textInfo.classList.add("text-success")   // Girilen ismi yeşil yaptım.


userName ? textInfo.innerHTML = `${stars} ${userName} ${stars}` :
        ((newClass = textInfo.classList.remove("text-success")),
        (divInfo.classList.add("text-danger")),
        (divInfo.innerHTML = `Lütfen isim giriniz...`))

// eger isim girilmediyse 5sn geri sayımdan sonra sayfa yenilenecek ve tekrar kullanıcıdan prompt alınacak.
const timer = document.querySelector('.text3')
let h1Info = document.querySelector('.text4')
let timeSecond = 5;
if (!userName) {

    timer.innerHTML = `${timeSecond}`
    h1Info.classList.add('text-warning')
    h1Info.innerHTML = `Sayfa Yenilenecek`
    const countDown = setInterval(() => {       // setInterval ile geri 1sn geri sayım
        timeSecond--;
        timer.innerHTML = `${timeSecond}`
        if (timeSecond <= 0) {
            clearInterval(countDown)            // Aktüel saniye <= 0 ise interval ı resetle
            location.reload();                  // sayfa yenileme komutu
        }
    }, 1000)
} else {  // isim varsa h2 class'ını ekle ve alttaki yazıyı yazdır.
    timer.classList.add("h2")
    timer.innerHTML = `<strong style=color:white>${userName}</strong> adlı isim girildi, lütfen sayfayı isim girmeden de deneyiniz`
}

let clockInfo = document.querySelector("#myClock")  // myClock id'si ile div'e ulaştım
// real time clock function
function showTime() {
    const today = new Date();       // today değişkenine Date'in örneğini oluşturdum
    let h = today.getHours();       // h değişkenine saat bilgisi çekildi
    let m = today.getMinutes();     // m değişkenine dakika bilgisi çekildi
    let s = today.getSeconds();     // s değişkenine saniye bilgisi çekildi
    m = checkTime(m);
    s = checkTime(s);
    clockInfo.innerHTML = h + ":" + m + ":" + s;    // formunda ekrana yaz
    setTimeout(showTime, 1000);
}

function checkTime(i) { // 10'dan küçük basamakları sıfırlı gösterme iki hane olarak.
    if (i < 10) { i = "0" + i };    
    return i;
}




