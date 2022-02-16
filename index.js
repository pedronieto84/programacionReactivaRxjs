const deTodo = Rx.Observable.of(
    'string',
    ['1', 2, '2'],
    23,
    true,
    {nombre:'Juan', apellido: 'Pardo'}
)

deTodo.subscribe(val => print(val))


function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}
