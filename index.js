// Si no me subscribo, no ocurre nada

const x = Math.random()
const cold = Rx.Observable.create( observer =>{
    observer.next(x)
})

// cold.subscribe((data)=>print(data))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
