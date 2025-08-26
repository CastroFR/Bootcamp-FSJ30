/* Vamos a declarar 2 cosas a la vez */

import { createContext, useState } from "react";
import { ListCharacters } from "../components/ListCharacters";

// De este FavoritesContext sacaremos la informacion posteriormente
export const FavoritesContext = createContext(); // Crear el contexto

// Proveedor de la información del contexto
// Wrapper -> Contiene otros componentes -> {children}
export const FavoritesDataProvider = ({children}) => {
    // Crear el estado de los favoritos
    const [favorites, setFavorites] = useState([])

    return (
        // aqui para un proveedor de datos y del contexto n colocamos un div o otro elemento sino de una
        // el FavoritesContext.Provider
        <FavoritesContext.Provider value={{ favorites, setFavorites }}> {/*lo que esta dentro del value es lo que muestra el context */}
            {/* esta sintaxis ermite compartir un valor*/}
            {children}
        </FavoritesContext.Provider>
    )
}