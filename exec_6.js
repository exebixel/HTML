const buttontech = document.querySelector('#buttontech')
const itemtech = document.querySelector('#inputtech')

buttontech.addEventListener('click', addTech)
itemtech.addEventListener('keypress', (event)=>{
    if (event.key == 'Enter') addTech(event) 
})

numtech = 1
function addTech(event) {
    const lista = document.querySelector('#techs')
    lista.innerHTML = `${lista.innerHTML} <p>${numtech}: ${itemtech.value}</p>`
    window.alert(`${numtech}: Tecnologia ${itemtech.value} absorvida`)
    numtech++
    itemtech.value = ''
}
