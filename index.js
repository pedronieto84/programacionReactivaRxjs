const interval = Rx.Observable.interval(1000)


// Esto es una subscripción.
const subscription = interval
.map(num => num * 2) // El método map transforma el dato
.subscribe((r)=> print(r))



function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
