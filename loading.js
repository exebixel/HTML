const divloading = document.querySelector('#load')

async function loading() {
    for (var i = 0; i <= 100; i++) {
        await sleep(100)
        divloading.style.width = `${i}%`
        divloading.innerHTML = `${i}%`
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

loading()
