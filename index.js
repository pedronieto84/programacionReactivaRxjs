// Hot Observable
// El dato se crea cuando alguien se subscribe, se crea desde dentro
// del observable.

const x = Math.random()
const cold = Rx.Observable.create( observer =>{
    observer.next(x)
})

cold.subscribe((res)=> print(res))
cold.subscribe((res)=> print(res))

// El resultado no cambia porque el dato se ha creado desde fuera


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
