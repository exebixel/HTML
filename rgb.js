const ranges = document.querySelectorAll('input[type="range"]')
const text = document.querySelectorAll('input[type="text"]')

for (i = 0; i < ranges.length; i++) {
    ranges[i].addEventListener('click', (event)=>{
        setText()
        setColor()
    })
    ranges[i].addEventListener('keydown', (event)=>{
        if (event.key == 'ArrowRight' ||
            event.key == 'ArrowLeft') {
            setText()
            setColor()
        }
    })
}

function getNums() {
    num = []
    for (i = 0; i < ranges.length; i++) {
        num.push( ranges[i].value )
    }
    return num
}

function setText() {
    num = getNums()        
    for (i = 0; i < text.length; i++) {
        text[i].value = num[i]
    }
}

function setColor() {
    num = getNums()         

    const div = document.querySelector('.result')
    div.style.backgroundColor = `rgb(${num.join(',')})`
}

setText()
setColor()
