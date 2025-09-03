
export const CardCharacter = ({ id, name, image, status, listFavorites = null, changeFavorites }) => {

    /* Parte lógica para poder utilizar la lista de favoritos */

    const handleAddToFavorites = () => {
        // logica para guardar en favoritos
        //console.log({ id, name, image, status });
        // Propagación de datos -> Mantener los valores anteriores y agregarle unos nuevos
        // Esta se da con callback -> arrayAnterior => [...arrayAnterior]
        // [...arrayAnterior] ... SpreadOperator, los 3 puntitos le dicen que saque lo que ya estaba
        // en el array anterior y lo guarde (los 3 puntos extrae = clave y valor)
        changeFavorites(prevArray => [...prevArray, { id, name, image, status }])
        //changeFavorites({ id, name, image, status })

    }

    const handleDeleteToFavorites = () => {
        // Usaremos el metodo mas usado => filter, para eliminar favoritos repetidos
        changeFavorites(listFavorites.filter((favorite) => favorite.id !== id));

    }

    const findCharacterInFavorites = () => {
        return listFavorites.find((favorite) => favorite.id === id) // nos devolvera true o false, si existe ó no
    }

    //console.log(listFavorites);
    return (
        <div>
            <div className="card mt-4 mb-2" style={{ height: '40vh' }}>
                <img src={image} className="card-img-top" alt="image-character" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{status}</p>

                    {listFavorites ? findCharacterInFavorites() ? <button className="btn btn-danger" onClick={handleDeleteToFavorites} >Delete to Favorites</button>
                        : <button className="btn btn-primary" onClick={handleAddToFavorites} >Add to Favorites</button>
                        : null}

                </div>
            </div>

        </div>
    )
}
