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

    // aqui vaciamos 2 cosas el innerhtml y el string
    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
}

function agregarCurso(evento) {
    console.log("Soy el agregar curso");
    // parentElement => propiedad para acceder al elemento padre
    //    console.log(evento.target.parentElement.parentElement);

    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);

    // validar que el curso exista para poder agregarlo y guardarlo, evitando duplicados
    // metodo => some => para recorrer el array y devolver true o false
    const existe = cursosCarrito.some((cursoArr) => cursoArr.id == curso.id);

    /* const totalPrecio = cursosCarrito.reduce( (cursoArr) => cursoArr + (cursoArr.precio * cursoArr.cantidad), 0);
console.log("Total precio" + totalPrecio); */

    if (existe) {
        cursosCarrito = cursosCarrito.map(cursoArr => {
            if (cursoArr.id === curso.id) {
                return {
                    ...cursoArr,  // los 3 puntos son => Operador de propagación, que permite copiar 
                    // las propiedades del objeto cursoArr y luego solo agregar las que se modificarán
                    // ...cursoArr => copia todas las propiedades del objeto cursoArr y se agregan las 2 modificadas
                    cantidad: cursoArr.cantidad + 1,
                    precioTotal: (cursoArr.precio * (cursoArr.cantidad + 1)) // .toFixed(2) para limitar a 2 decimales
                    // precio: cursoArr.precio + cursoArr.precio
                };
            }
            return cursoArr;
        });
    } else {
        cursosCarrito.push({
            ...curso, // copiamos las propiedades del curso
            precioTotal: curso.precio // tenemos el precio total inicial como tal, que es igual al precio unitario

        }); // esta accion se estaria enviando al servidor

    }
    console.log("Estado carrito actual: ", cursosCarrito);


    // aca llamamos la funcion para que lea los cambios
    pintarCarritoHTML();

}


// Creamos otra funcion para poder ir extrayendo datos deseados,
// en este caso comenzando con la imagen.
function leerDatosCurso(curso) {
    console.log("Leyendo los datos del curso...", curso);

    console.log(curso.querySelector('a').getAttribute('data-id')); // obtenemos el ID, por medio del getAttribute
    console.log(curso.querySelector('img').src); // con "src2 => obtengo la ruta"
    console.log(curso.querySelector('h4').textContent); // .textContent => obtengo el texto del contenedor en string
    console.log(curso.querySelector('h5').textContent);

    // constante para guardar el precio del curso
    const precioTexto = curso.querySelector('h5').textContent;
    // Convertimos el precio a un numero, eliminando el simbolo de dolar
    const precio = parseFloat(precioTexto.replace('$', '')); // eliminamos el simbolo de dolar y convertimos a numero

    // Creamos un objeto con la informacion del curso, el cual utilizarmos para agregar el curso
    return infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: precio, // precio convertido a numero
        cantidad: 1
    };
    //return infoCurso;
}

function pintarCarritoHTML() {
    console.log("Pintando el carrito HTML...");
    
    //contenedorCarrito.innerHTML = "<h1>hola</h1>"

    //Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map((curso) => {
        //const precioTotal = curso.precio;
        curso.precioTotal = curso.precio * curso.cantidad; // Calculamos el precio total del curso multiplicando el precio por la cantidad
        //console.log(curso.precio);
        console.log(curso.precioTotal);
        // creamos una fila
        let fila = document.createElement('tr');

        // Asignar los vaores en celdas
        //        fila.innerHTML = "<td>Imagen</td><td>Nombre</td><td>Precio</td>"
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precioTotal}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
        return curso;
    });

}

function eliminarCurso(id) {
    console.log(id);

    cursosCarrito = cursosCarrito.map((curso) => {
        console.log(curso.id);
        //console.log("Soy la cantidad" + curso.cantidad);

        // PROBLEMA => ELIMINA TOTALMENTE EL ID DEL CURSO, Y NO DESCUENTA SI HAY MAS DE 1
        // SOLUCION =>
        // Si la cantidad es mayor a 1, entonces descontamos 1 a la cantidad
        // Si la cantidad es 1, entonces eliminamos el curso
        // Si tiene cantidad mayor a 1, tiene que ir descontando de 1 en 1

        if (curso.id == id) {

            console.log(curso.id);
            // Va guardar los cursos que sean diferentes a ese ID
            //cursosCarrito = cursosCarrito.filter( curso => curso.id != id) 
            if (curso.cantidad > 1) {
                console.log("Soy la cantidad mayor a 1");
                // Descontamos 1 a la cantidad
                return {
                    ...curso,
                    cantidad: curso.cantidad - 1
                    // precio: curso.precio - curso.precio
                };

            }
            return null;
            /* **********Solucion al problema de que no elimina cursos*********
            // SOLUCION
            // cursosCarrito solo guardaba los ID diferentes pero no los almacenaba como tal
            // entonces se agrega cursosCarrito = cursosCarrito para que guarde los ID y listo
            */
        }
        return curso;
    })
    cursosCarrito = cursosCarrito.filter(curso => curso !== null); // Filtramos los cursos que no sean iguales al ID

    pintarCarritoHTML();
}
