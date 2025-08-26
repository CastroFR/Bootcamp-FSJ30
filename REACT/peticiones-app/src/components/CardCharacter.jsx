
export const CardCharacter = ({id,name,image,status,listFavorites,changeFavorites}) => {

/* Parte lógica para poder utilizar la lista de favoritos */

const handleAddToFavorites = () => {
    // logica para guardar en favoritos
    console.log({id,name,image,status});
    // Propagación de datos
    changeFavorites({id,name,image,status})
    console.log(listFavorites);
    
}
    return (
        <div>
            <div className="card" style={{height: '28rem'}}>
                <img src={image} className="card-img-top" alt="image-character"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{status}</p>
                        <button className="btn btn-primary" onClick={handleAddToFavorites}>Add to Favorities</button>
                    </div>
            </div>
        </div>
    )
}
