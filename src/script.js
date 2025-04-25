import Lenis from 'lenis'
import gsap from 'gsap'

const lenis = new Lenis({
    autoRaf: true,
});



let navbar = document.querySelector('nav')
let logo = document.querySelector('#logo')
let respoButton = document.querySelector('.respo-button')
let respo = document.querySelector('.respo')

let prevScroll = 0;

window.addEventListener("scroll", function () {

    if ((prevScroll) < window.scrollY) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transform = "translateY(0%)";
    }

    if (window.scrollY > window.innerHeight) {
        navbar.style.backgroundColor = "#fff"
        navbar.classList.add('text-black')
        navbar.classList.remove('text-white')
        logo.style.filter = "invert(0)";
    } else {
        navbar.style.backgroundColor = "transparent"
        navbar.classList.add('text-white')
        navbar.classList.remove('text-black')
        logo.style.filter = "invert(1)";
    }
    prevScroll = window.scrollY;

});


let status = "close";


respoButton.addEventListener('click', function () {
    if (status == "close") {
        lenis.stop()
        respoButton.classList.add("pointer-events-none")
        respo.classList.remove("pointer-events-none")
        respo.classList.remove("opacity-0")
        respo.classList.add("opacity-100")
        gsap.from("#animate li", {
            y: 100,
            opacity: 0,
            filter: "blur(10px)",
            stagger: 0.05,
            onComplete: function () {
                respoButton.classList.remove("pointer-events-none")
            }
        })
        navbar.classList.add('text-black')
        navbar.classList.remove('text-white')
        logo.style.filter = "invert(0)";
        respoButton.innerHTML = `<i class="ri-close-line text-2xl"></i>`
        status = "open"
    }
    else if (status = "open") {
        
        respo.classList.add("pointer-events-none")
        respo.classList.add("opacity-0")
        respo.classList.remove("opacity-100")

        if (window.scrollY < window.innerHeight) {
            navbar.classList.remove('text-black')
            navbar.classList.add('text-white')
            logo.style.filter = "invert(1)";
        }
        respoButton.innerHTML = `<i class="ri-menu-line text-2xl"></i>`
        lenis.start()
        status = "close"
    }
    console.log(status)
})


