const exec3_button = document.querySelector('#exec3 button')
const exec3_input = document.querySelector('#exec3 input')
const exec3_p = document.querySelector('#exec3 p')

exec3_button.addEventListener('click', tabuada)

function tabuada() {
    num = exec3_input.value
    values = []
    for (i = 0; i < 9; i++) {
        values.push(`${num} x ${i} = ${num*i}`)
    }
    exec3_p.innerHTML = `${values.join('<br>')}`
}
