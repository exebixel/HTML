const button1 = document.querySelector('#exec1 button')
const button2 = document.querySelector('#exec1_finalizar')
const inp1 = document.querySelector('#exec1 input[type="number"]')
const p_exec1 = document.querySelector('#exec1 p')
const p_final = document.querySelector('#exec1_result')

button1.addEventListener('click', exec1)
inp1.addEventListener('keypress', (event)=>{
    if (event.key == 'Enter') {
        exec1() 
    }
})

button2.addEventListener('click', exec1_final)

nums_exec1 = []
function exec1() {
    erro = 0
    if ( inp1.value == "" ) {
        window.alert('Digite um número')
        erro++
    }
    num = Number(inp1.value)
    for (i = 0; i < nums_exec1.length; i++) {
        if (num == nums_exec1[i]) {
            window.alert('Esse número já foi adicionado')   
            erro++
        }
    }
    if (erro == 0) {
        nums_exec1.push(num)        
        p_exec1.innerHTML = nums_exec1.join(', ')
    }    
    inp1.value = ""
}

function exec1_final() {
    erro = 0
    if (nums_exec1.length == 0) {
        window.alert('Nenhum número foi adicionado')
        erro++
    }    
    if (erro == 0) {
        final()
    }
}

function final() {
    soma = 0
    maior = nums_exec1[0]
    menor = nums_exec1[0]
    for (i = 0; i < nums_exec1.length; i++) {
        soma += nums_exec1[i] 
        if (maior < nums_exec1[i]) maior = nums_exec1[i] 
        if (menor > nums_exec1[i]) menor = nums_exec1[i] 
    }
    media = soma/nums_exec1.length

    p_final.innerHTML = `
    ${nums_exec1.length} números cadastrados <br>
    ${menor} é o menor número <br>
    ${maior} é o maior número <br>
    Soma dos números: ${soma} <br>
    A média dos números: ${media}
    `

}
