const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Resuelta')
    }, 1000)
})

// Llamo al método fromPromise para convertir una promesa en observable
const observableDesdePromesa = Rx.Observable.fromPromise(promise)

// Me subscribo al observable
observableDesdePromesa.subscribe((res)=>{
    print(res)
})


// Para convertir un observable a promesa
// observable.toPromise() -> Devuelve una promesa

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}

