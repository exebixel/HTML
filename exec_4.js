const calcs = document.querySelectorAll('.calc')
const numscalc = document.querySelectorAll('#numop')

function show(result) {
    const p = document.querySelector('#result')
    p.innerHTML = `Resultado: ${result}`
}

calcresult = []
calcresult.push( ()=>{
    show(Number(numscalc[0].value) + Number(numscalc[1].value))
})
calcresult.push( ()=>{
    show(Number(numscalc[0].value) - Number(numscalc[1].value))
})
calcresult.push( ()=>{
    show(Number(numscalc[0].value) * Number(numscalc[1].value))
})
calcresult.push( ()=>{
   show(Number(numscalc[0].value) / Number(numscalc[1].value))
})

for (i = 0; i < calcs.length; i++) {
    calcs[i].addEventListener('click', calcresult[i])
}
