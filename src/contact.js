function displayContactTab() {
    
    const element = document.querySelector('#content')
    const contactDiv = document.createElement('div')
    const contactInfo = document.createElement('p')


    contactDiv.classList.add('active')

    contactInfo.textContent = '(559) 324-4311'

    
    element.removeChild(element.lastChild)

    element.appendChild(contactDiv)
    contactDiv.appendChild(contactInfo)
}

export default displayContactTab