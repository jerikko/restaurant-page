import displayHomeTab from './home.js'
import displayContactTab from './contact.js'
import displayMenuTab from './menu.js'
import curryImg from './curry-test.jpg'
import './style.css'

function init() {
    const element = document.querySelector('#content')
    const homeDiv = document.createElement('div')
    const header = document.createElement('h1')
    const fakePraise = document.createElement('p')
    const testImg = new Image()


    homeDiv.classList.add('active')

    testImg.src = curryImg
    testImg.alt = 'Stephen Curry test header'

    header.textContent = 'Stephen Curry test header'
    fakePraise.textContent = 'This restaurant is amazing!'


    element.appendChild(homeDiv)
    homeDiv.appendChild(header)
    homeDiv.appendChild(testImg)
    homeDiv.appendChild(fakePraise)
}

function createNav() {
    const element = document.querySelector('#content')
    const nav = document.createElement('nav')
    const homeBtn = document.createElement('button')
    const contactBtn = document.createElement('button')
    const menuBtn = document.createElement('button')


    element.classList.add('active')
    homeBtn.classList.add('home', 'active')
    contactBtn.classList.add('contact-us')
    menuBtn.classList.add('menu')


    homeBtn.textContent = 'Home'
    contactBtn.textContent = 'Contact Us'
    menuBtn.textContent = 'Menu'


    element.appendChild(nav)
    nav.appendChild(homeBtn)
    nav.appendChild(contactBtn)
    nav.appendChild(menuBtn)


    homeBtn.addEventListener('click', function() {
        if (homeBtn.classList.contains('active')) return
        else {
            displayHomeTab()
            homeBtn.classList.add('active')
        }
        contactBtn.classList.remove('active')
        menuBtn.classList.remove('active')
    
    })
    
    contactBtn.addEventListener('click', function() {
        if (contactBtn.classList.contains('active')) return
        else {
            displayContactTab()
            contactBtn.classList.add('active')
        }
        homeBtn.classList.remove('active')
        menuBtn.classList.remove('active')
    })
    
    menuBtn.addEventListener('click', function() {
        if (menuBtn.classList.contains('active')) return
        else {
            displayMenuTab()
            menuBtn.classList.add('active')
        }
        homeBtn.classList.remove('active')
        contactBtn.classList.remove('active')
    
    })
}

createNav()
init()