// Cold Observable
// El dato se crea cuando alguien se subscribe, se crea desde dentro
// del observable.

const cold = Rx.Observable.create( observer =>{
    observer.next(Math.random())
})

cold.subscribe((res)=> print(res))
cold.subscribe((res)=> print(res))

// El resultado cambia porque el dato se ha creado desde dentro


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
