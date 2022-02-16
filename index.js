const interval = Rx.Observable.interval(1000)

// Los observables que no se autofinalizan deben gestionarse (como veremos más adelante), o no se debe abusar de ellos, porque sino puede pasar que el navegador se queda pillado por falta de memoria. Ejemplo a no hacer nunca

// Esto es una subscripción.
const subscription = interval
.finally(()=>print('finally'))
.subscribe((r)=> print(r))

// Pasados 5 segundos fuerzo la terminación con el método unsubscribe.

setTimeout(()=>{
    subscription.unsubscribe()
}, 5000)

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
