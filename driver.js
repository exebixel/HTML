const driverbutton = document.querySelectorAll('#drvbutton button')
const result = document.querySelector('.final')

driverbutton[0].addEventListener('click', sucess)
driverbutton[1].addEventListener('click', opno)

function sucess(event) {
    result.innerHTML = "Multa enviada com sucesso!!"
    result.className = "final safe"
    const driver = document.querySelector('#driver')
    driver.classList.add("hidden")
}

function opno(event) {
    const div = document.querySelector('#condutor')
    div.classList.remove('hidden')
}



const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', envenviar)

function envenviar(event) {
    const div = document.querySelector('#condutor')
    const inputs = document.querySelectorAll('#condutor input')
    let check = 0
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") check++
    }
    if (check == 0) {
        div.classList.add('hidden')
        sucess()
    } else {
        result.innerHTML = "Preencha os campos acima!!"        
        result.className = ("final grave")
    }
}
