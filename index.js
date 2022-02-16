const timer = Rx.Observable.timer(1000)

timer.subscribe(done => print('1 sec'))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}

