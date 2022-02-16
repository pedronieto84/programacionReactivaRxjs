const interval = Rx.Observable.interval(1000)


// Esto es una subscripción.
const subscription = interval
.do(data => console.log(data)) // El método do es como el log en un momento en concreto del flujo
.map(d => d*2)
.do(data =>console.log(data))
.subscribe((r)=> print(r))



function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
