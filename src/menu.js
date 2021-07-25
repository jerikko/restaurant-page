function displayMenuTab() {
    
    const element = document.querySelector('#content')
    const menuDiv = document.createElement('div')
    const menu = document.createElement('p')


    menuDiv.classList.add('active')

    menu.textContent = 'Yummy food'

    
    element.removeChild(element.lastChild)

    element.appendChild(menuDiv)
    menuDiv.appendChild(menu)
}

export default displayMenuTab