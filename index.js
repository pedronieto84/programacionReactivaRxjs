const observable = Rx.Observable.create(observer =>{
    observer.next('1')
    observer.next('2')
    observer.next('3')

    throw 'error'

    observer.next('4')
})

observable
    .catch(err=>print(err))
    .retry(3) // Digo cuantas veces quiero retry si veo un error
    .subscribe(res => print(res))


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
