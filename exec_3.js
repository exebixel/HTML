const buttonDouble = document.querySelector('#bottondoble')
const textDouble = document.querySelector('#textdouble')
const pDouble = document.querySelector('#pdouble')

buttonDouble.addEventListener('click', dobrar)
textDouble.addEventListener('keypress', (event)=>{
    if (event.key == 'Enter') dobrar()
})

function dobrar() {
    pDouble.innerHTML = `Dobro: ${textDouble.value * 2}`
}
