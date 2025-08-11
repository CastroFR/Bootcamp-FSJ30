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
    const existe = cursosCarrito.some( (cursoArr) => cursoArr.id == curso.id)

    const totalPrecio = cursosCarrito.reduce( (cursoArr) => cursoArr + (cursoArr.precio * cursoArr.cantidad), 0);
console.log("Total precio" + totalPrecio);

    if(existe){
        cursosCarrito.map( (cursoArr) => {
            if(cursoArr.id === curso.id){
                cursoArr.cantidad += 1;
                //cantidad++
                // Aumentar precio al seleccionar productos
                // Utilizar un metodo de string que pueda quitar el primer caracter
                // Metodos posibles serian => Substring o Slice

                
                cursoArr.precio = cursoArr.precio.substring(1);
                // Transformamos el string a entero
                // parseInt o parseFloat
                cursoArr.precio = parseFloat(cursoArr.precio);

                // Aumentamos el precio
                cursoArr.precio += cursoArr.precio;

                // Devolvemos el precio a su formato original
                cursoArr.precio = `$${cursoArr.precio}`;
                
                return cursoArr;
            }
        })
    }else{
        cursosCarrito.push(curso); // esta accion se estaria enviando al servidor
    }
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
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map( (curso) => {

        // creamos una fila
        let fila = document.createElement('tr');

        // Asignar los vaores en celdas
        //        fila.innerHTML = "<td>Imagen</td><td>Nombre</td><td>Precio</td>"
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
    })

}

function eliminarCurso(id){
    console.log(id);
    
cursosCarrito.map( (curso) => {
    console.log(curso.id);
    //console.log("Soy la cantidad" + curso.cantidad);

    // PROBLEMA => ELIMINA TOTALMENTE EL ID DEL CURSO, Y NO DESCUENTA SI HAY MAS DE 1
    // SOLUCION =>
        // Si la cantidad es mayor a 1, entonces descontamos 1 a la cantidad
    // Si la cantidad es 1, entonces eliminamos el curso

    // Si tiene cantidad mayor a 1, tiene que ir descontando de 1 en 1
    if(curso.cantidad > 1){
        console.log("Soy la cantidad mayor a 1");
        // Descontamos 1 a la cantidad
        curso.cantidad -= 1;
        // Descontamos el precio
        curso.precio = curso.precio.substring(1);
        // Transformamos el string a entero
        curso.precio = parseFloat(curso.precio);
        // Descontamos el precio
        curso.precio -= curso.precio;
        // Devolvemos el precio a su formato original
        curso.precio = `$${curso.precio}`;
        console.log("Soy la cantidad mayor a " + curso.cantidad);
        return curso;
    }



    if(curso.id == id){
        console.log(curso.id);
        // Va guardar los cursos que sean diferentes a ese ID
        cursosCarrito = cursosCarrito.filter( curso => curso.id != id) 
        /* **********Solucion al problema de que no elimina cursos*********
        // SOLUCION
        // cursosCarrito solo guardaba los ID diferentes pero no los almacenaba como tal
        // entonces se agrega cursosCarrito = cursosCarrito para ue guarde los ID y listo
        */
    }
})

pintarCarritoHTML();
}