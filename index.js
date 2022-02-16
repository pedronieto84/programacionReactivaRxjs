const clicks = Rx.Observable.fromEvent(document, 'click')



clicks
.switchMap((click=> Rx.Observable.interval(500)))
.subscribe(e => print(e))


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
