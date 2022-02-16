const interval = Rx.Observable.interval(1000)

interval.subscribe(int => print(new Date().getSeconds()))
function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}

