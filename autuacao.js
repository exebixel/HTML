const check = document.querySelector('#check')


check.addEventListener('click', autuacao)

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

    if ( speed - max <= 0 ) {
        console.log("não foi autuado")
    }
    else if (speed - max <= 7) {
        console.log("até 7")
    } 
    else if (percent(max, speed) <= 20) {
        console.log("maior que 7 menor que 20%")
    } 
    else if ( percent(max,speed) <= 50) {
        console.log("maior que 20% menor que 50%")
    }
    else if ( percent(max,speed) > 50) {
        console.log("maior que 50%")
    }
}
