const button = document.querySelector('#buttonlist')
const item = document.querySelector('#inputlist')

button.addEventListener('click', addItem)
item.addEventListener('keypress', (event)=>{
    if (event.key == 'Enter') addItem(event) 
})

numitem = 1
function addItem(event) {
    const lista = document.querySelector('#lista')
    lista.innerHTML = `${lista.innerHTML} <p>${numitem}: ${item.value}</p>`
    numitem++
    item.value = ''
}
