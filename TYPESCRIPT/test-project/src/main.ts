import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Holaaaaaa</h1>
<button id="btnMagia">MAGIA!</button>
</div>
`

let btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;
console.log(btnDOM);

// Hacer que ese boton realice un ALERT que diga Chauchis

// **********************************************************************
// RETO RESUELTO
btnDOM.addEventListener('click', () => {
    alert('Chauchis');
    console.log('Funciona el ALERT agregado al botón');
})
// **********************************************************************