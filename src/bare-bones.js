import curryImg from './curry-test.jpg'

function bareBones() {

    const element = document.querySelector('#content')

    const header = document.createElement('h1')
    header.textContent = 'Stephen Curry test header'
    element.appendChild(header)

    const testImg = new Image()
    testImg.src = curryImg
    element.appendChild(testImg)


    const fakePraise = document.createElement('p')
    fakePraise.textContent = 'This restaurant is amazing!'
    element.appendChild(fakePraise)

}


export { bareBones }