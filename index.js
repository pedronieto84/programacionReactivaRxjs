const subject = Rx.Subject.of('hello')

const subA = subject.subscribe(val => print(`Sub A: ${val}`))
const subB = subject.subscribe(val => print(`Sub B: ${val}`))

// Hasta aquí nada nuevo

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
