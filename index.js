const interval = Rx.Observable.interval(1000)


// Esto es una subscripción.
const subscription = interval
.filter(data => data > 2) 
.subscribe((r)=> print(r))



function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
