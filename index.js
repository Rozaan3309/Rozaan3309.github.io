var prevScrollpos = window.pageYOffset;

let screenWidth = window.innerWidth
let screenHeight = window.innerHeight

let aboutNav = document.getElementById('about-navPoint')
let portfolioNav = document.getElementById('portfolio-navPoint')
let contactNav = document.getElementById('contact-navPoint')

let aboutSection = document.getElementById('toAboutBTN') // here your current task <==================
let portfolioSection = document.getElementById('toPortfolioBTN')
let contactSection = document.getElementById('toContactBTN')

let currentDate = new Date
let myAge = document.getElementById('age').innerHTML = (currentDate.getFullYear() - 2001)

let projectsNote = document.getElementById('projectsNote')

if (screenHeight > screenWidth) {
    projectsNote.innerHTML = "Tap the image for detail"
}

window.onscroll = function() {
    toggleHideHeader()
}


aboutNav.addEventListener('mouseover', () => toggleUnderlineIn('about'))
portfolioNav.addEventListener('mouseover', () => toggleUnderlineIn('portfolio'))
contactNav.addEventListener('mouseover', () => toggleUnderlineIn('contact'))

aboutNav.addEventListener('mouseout', () => toggleUnderlineOut('about'))
portfolioNav.addEventListener('mouseout', () => toggleUnderlineOut('portfolio'))
contactNav.addEventListener('mouseout', () => toggleUnderlineOut('contact'))

function toggleUnderlineIn (navPointName) {
    if (navPointName === "about") {
        document.getElementById("about-line").style.animation = "growUnderlineIn 0.3s forwards"
    } else if (navPointName === "portfolio"){
        document.getElementById("portfolio-line").style.animation = "growUnderlineIn 0.3s forwards"
    } else if (navPointName === "contact"){
        document.getElementById("contact-line").style.animation = "growUnderlineIn 0.3s forwards"
    }
}

function toggleUnderlineOut (navPointName) {
    if (navPointName === "about") {
        document.getElementById("about-line").style.animation = "growUnderlineOut 0.3s forwards"
    } else if (navPointName === "portfolio"){
        document.getElementById("portfolio-line").style.animation = "growUnderlineOut 0.3s forwards"
    } else if (navPointName === "contact"){
        document.getElementById("contact-line").style.animation = "growUnderlineOut 0.3s forwards"
    }
}

function toggleHideHeader () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-12vh";
    }
    prevScrollpos = currentScrollPos;

}