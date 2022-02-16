const interval = Rx.Observable.of(1,2,3,4)


// First devuelve el primero.
const subscriptionFirst = interval
.first() 
.subscribe((r)=> print(r))

// Devuelve el último
const subscriptionLast = interval
.last() 
.subscribe((r)=> print(r))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
