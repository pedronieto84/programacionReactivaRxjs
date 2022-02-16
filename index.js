const mousemove = Rx.Observable.fromEvent(document, 'mousemove')



mousemove
.throttleTime(1000) // Si comento esta linea veremos que se emiten miles de eventos
.subscribe(e => print(e.type))


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
