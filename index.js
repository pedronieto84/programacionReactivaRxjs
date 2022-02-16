// Me aseguro de que he importado la libreria y la logueo
console.log(Rx);

// Creo un observable
const observable = Rx.Observable.create( observer =>{
    // Le voy pasando acciones con el método next
    observer.next('hello')
    // Le voy pasando acciones con el método next
    observer.next('world')
})

// Me subscribo al observable y como callback llamo a la función predefinida anteriormente
observable.subscribe (val =>print(val))

// Función que nos printea en pantalla los cambios en vez de estar mirando todo el rato al console.log

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}