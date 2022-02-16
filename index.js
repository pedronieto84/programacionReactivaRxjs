const interval = Rx.Observable.interval(1)

// Los observables que no se autofinalizan deben gestionarse (como veremos más adelante), o no se debe abusar de ellos, porque sino puede pasar que el navegador se queda pillado por falta de memoria. Ejemplo a no hacer nunca

for (let index = 0; index < 100; index++) {
    interval.subscribe((r)=> print(r))
    
}
interval
.finally(()=>print('finally'))
.subscribe((r)=> print(r))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
