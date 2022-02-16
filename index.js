const subject = new Rx.Subject()

const subA = subject.subscribe(val => print(`Sub A: ${val}`))
const subB = subject.subscribe(val => print(`Sub B: ${val}`))

// Hasta aquí nada nuevo

subject.next('Hello')

setTimeout(()=>{
    subject.next('World')
}, 1000)

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
