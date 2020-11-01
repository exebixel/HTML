const check = document.querySelector('#check')


check.addEventListener('click', autuacao)

function get_data() {
    const inputs = document.querySelectorAll('input[type="number"]')
    const num = (n)=> { return Number(n.value) }
    let max = num(inputs[0])
    let speed = num(inputs[1])
    return {"max": max, "speed": speed}
}

function autuacao(event) {
    const {max, speed} = get_data()
    if (speed - max <= 7) {
        console.log("here")
        
    }
}
