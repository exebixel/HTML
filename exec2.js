const exec2_button = document.querySelector('#exec2 button')
const exec2_input = document.querySelectorAll('#exec2 input')
const exec2_p = document.querySelector('#exec2 p')

exec2_button.addEventListener('click', contar)

function contar() {
    nums = [] 
    for (i = 0; i < exec2_input.length; i++) {
        nums.push(Number(exec2_input[i].value))
    }
    values = []
    for (i = nums[0]; i < nums[1]; i+=nums[2]) {
        values.push(i)
    }    
    exec2_p.innerHTML = `
    Contando: <br>
    ${values.join(' \u{1F637} ')}
    \u{1F637} 
    `
}
