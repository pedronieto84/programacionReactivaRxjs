const timer = Rx.Observable.timer(1000)

timer
.finally(()=> print('finally'))
.subscribe(()=> print('subscribe'))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
