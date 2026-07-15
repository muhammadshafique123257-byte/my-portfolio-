// // Smooth Scroll

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     anchor.addEventListener('click', function(e) {

//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({

//             behavior:'smooth'

//         });

//     });

// });



// // Typing Animation

// var typed = new Typed(".typing", {

//     strings: [

//         "Cyber Security Student",

//         "Python Developer",

//         "CCNA Learner",

//         "Linux Enthusiast",

//         "Future Penetration Tester"

//     ],

//     typeSpeed:70,

//     backSpeed:40,

//     backDelay:1500,

//     loop:true

// });


// let topBtn=document.getElementById("topBtn");

// window.onscroll=function(){

// if(document.documentElement.scrollTop>300){

// topBtn.style.display="block";

// }

// else{

// topBtn.style.display="none";

// }

// }

// topBtn.onclick=function(){

// window.scrollTo({

// top:0,

// behavior:"smooth"

// });

// }







/* ==========================================
   TYPING ANIMATION
========================================== */

var typed = new Typed(".typing", {

    strings: [
        "Cyber Security Student",
        "Python Developer",
        "CCNA Learner",
        "Linux Enthusiast",
        "Future Penetration Tester"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   FADE IN ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".about,.skills,.projects,.contact").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});