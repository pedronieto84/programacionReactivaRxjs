const interval = Rx.Observable.interval(1000)

// Este intervalo nunca se finaliza si lo dejamos así
interval
.finally(()=>print('finally'))
.subscribe((r)=> print(r))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
