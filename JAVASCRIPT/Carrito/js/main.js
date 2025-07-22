//console.log("Funcionando holaa");

/*
** Primero identificamos las clases para darles accion, 
** y creamos la funcion para cada una.
*/

// OBTENEMOS EL CARRITO
const contenedorCarrito = document.getElementById('cuerpo-carrito');

// variable para guardar los datos del curso en el carrito
let cursosCarrito = [];
//

function vaciarCarrito(evento) {
    console.log("Soy el vaciar carrito");
}

function agregarCurso(evento) {
    console.log("Soy el agregar curso");
    // parentElement => propiedad para acceder al elemento padre
    //    console.log(evento.target.parentElement.parentElement);

    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);
    cursosCarrito.push(curso); // esta accion se estaria enviando al servidor
    console.log(cursosCarrito);

    // aca llamamos la funcion para que lea los cambios
    pintarCarritoHTML();

}

// Creamos otra funcion para poder ir extrayendo datos deseados,
// en este caso comenzando con la imagen.
function leerDatosCurso(curso) {
    console.log(curso);

    console.log(curso.querySelector('a').getAttribute('data-id')); // obtenemos el ID, por medio del getAttribute
    console.log(curso.querySelector('img').src); // con "src2 => obtengo la ruta"
    console.log(curso.querySelector('h4').textContent); // .textContent => obtengo el texto del contenedor en string
    console.log(curso.querySelector('h5').textContent);

    // Creamos un objeto cn la informacion del curso, el cual utilizarmos para agregar el curso
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }

    return infoCurso;
}

function pintarCarritoHTML() {
    //contenedorCarrito.innerHTML = "<h1>hola</h1>"

    //Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = ""

    cursosCarrito.map((curso) => {

        // creamos una fila
        let fila = document.createElement('tr');

        // Asignar los vaores en celdas
        //        fila.innerHTML = "<td>Imagen</td><td>Nombre</td><td>Precio</td>"
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
    })

}
pintarCarritoHTML();