const check = document.querySelector('#check')
const inputs = document.querySelectorAll('input[type="number"]')


check.addEventListener('click', autuacao)
inputs[0].addEventListener('keypress', (event)=>{
    if ( event.key == 'Enter' ) {
        if ( inputs[1].value == "" ) {
            inputs[1].focus()
        }
        else {
            autuacao(event)
        }
    }
})
inputs[1].addEventListener('keypress', (event)=>{
    if ( event.key == 'Enter' ) {
        if ( inputs[0].value == "" ) {
            inputs[0].focus()
        }
        else {
            autuacao(event)
        }
    }
})

function get_data() {
    const inputs = document.querySelectorAll('input[type="number"]')
    const num = (n)=> { return Number(n.value) }
    let max = num(inputs[0])
    let speed = num(inputs[1])
    return {"max": max, "speed": speed}
}

function percent(total, value) {
    return (value*100/100)-100
}

function autuacao(event) {
    const {max, speed} = get_data()

    const result = document.querySelector('.result')

    if ( speed - max <= 0 ) {
        result.innerHTML = "Você não foi autuado!!"
        result.className = "result safe"
    }
    else if (speed - max <= 7) {
        result.innerHTML = "Advertência!!"
        result.className = "result warning"
    } 
    else if (percent(max, speed) <= 20) {
        result.innerHTML = "Autuado!! Infração Grave!!"
        result.className = "result grave"
    } 
    else if ( percent(max,speed) <= 50) {
        result.innerHTML = "Autuado!! Infração Gravíssima!!"
        result.className = "result gravissima"
    }
    else if ( percent(max,speed) > 50) {
        result.innerHTML = "Autuado!! Infração Gravíssima!! <br> Penalidade de suspensão do direito de dirigir."
        result.className = "result over"
    }
}
