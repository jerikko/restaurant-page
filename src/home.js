import curryImg from './curry-test.jpg'

function displayHomeTab() {

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


    element.removeChild(element.lastChild)

    element.appendChild(homeDiv)
    homeDiv.appendChild(header)
    homeDiv.appendChild(testImg)
    homeDiv.appendChild(fakePraise)
}


export default displayHomeTab