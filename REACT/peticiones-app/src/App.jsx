import './App.css'
import { ListCharacters } from './views/listCharacters/ListCharacters';
import { FavoritesDataProvider } from './contexts/FavoritesContext';
import {BrowserRouter, Route, Routes} from 'react-router'

// Asincronismo -> Manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {
  // Para declarar una segunda funcion dentro, evitamos "function" y lo declarmos como una const y funcion flecha.

  return (
    <>
      <FavoritesDataProvider>
        {/* Activamos React Router */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListCharacters />} />

          </Routes>
          <ListCharacters /> {/* Solo este componente recibirá contexto del FavoritesContext */}

        </BrowserRouter>
      </FavoritesDataProvider>
    </>
  )
}

export default App
