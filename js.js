let other = document.querySelector('.other');
let menu = document.querySelector('.header .mega-menu');

let body = document.querySelector("body");

let dar = document.querySelector(".dark");
let team = document.querySelectorAll(".team .box ");
let titel = document.querySelectorAll(".main-titel");
let header = document.querySelector(".header");
let landing = document.querySelector(".landing");
let gally = document.querySelector(".gallery");
let spikes = document.querySelector('.spikes');
let fetur = document.querySelector(".features");
let test = document.querySelector('.testimonials');
let servs = document.querySelector('.services');
let work = document.querySelector('.work-steps');
let evnt = document.querySelector('.events');
let stuts = document.querySelector('.stats');
let dicount = document.querySelector('.discount');
let skill = document.querySelectorAll('.gallery .box span');
let progrss = document.querySelectorAll('.gallery .box img');
let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();


other.addEventListener('click', (e) => {

    menu.classList.toggle('activ')
});


dar.addEventListener('click', (e) => {

    body.classList.toggle('dark');
    titel.forEach(el => {
        el.classList.toggle('dark')
    });

    header.classList.toggle('dark');
    landing.classList.toggle('dark');
    gally.classList.toggle('dark');
    spikes.classList.toggle('dark');
    fetur.classList.toggle('dark');
    test.classList.toggle('dark');
    servs.classList.toggle('dark');
    work.classList.toggle('dark');
    evnt.classList.toggle('dark');
    stuts.classList.toggle('dark');
    dicount.classList.toggle('dark');
    e.target.classList.toggle('fa-sun')

    team.forEach(ele => {

        ele.classList.toggle('dark');
    });


});

progrss.forEach(ele => {
    ele.addEventListener('click', (e) => {

        skill.forEach(el => {
            el.style.width = el.dataset.width

        });


    })
});


let conut = setInterval(() => {
    let datenow = new Date().getTime();

    let date = countDownDate - datenow;
    console.log(date)
    let day = Math.floor(date / (1000 * 60 * 60 * 24));

    document.querySelector(".days").innerHTML = day < 10 ? `0${day}` : day;
    let hour = Math.floor(date % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hour < 10 ? `0${hour}` : hour;
    let minutes = Math.floor(date % (1000 * 60 * 60) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    let second = Math.floor((date % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = second < 10 ? `0${second}` : second;



}, 1000);