// Me aseguro de que he importado la libreria y la logueo
console.log(Rx);

// Observable que reacciona a clicks
const clicks = Rx.Observable.fromEvent(document, 'click')

// Me subscribo al observable
clicks.subscribe((click)=>{
    console.log(click);
})

