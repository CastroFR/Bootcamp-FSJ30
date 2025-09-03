import { ListCharacters } from './views/listCharacters/ListCharacters';
import { FavoritesDataProvider } from './contexts/FavoritesContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { SessionView } from './views/session/SessionView';
import { Navbar } from './components/Navbar'
import { SearchCharacter } from './views/searchCharacter/SearchCharacter'

// Asincronismo -> Manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {
  // Para declarar una segunda funcion dentro, evitamos "function" y lo declarmos como una const y funcion flecha.

  return (
    <>
      <FavoritesDataProvider>
        {/* Activamos React Router */}
        <BrowserRouter>
          <Navbar />
          <main className='container'>
            <Routes>
              <Route path='/' element={<ListCharacters />} />
              <Route path='/session' element={<SessionView />} />
              <Route path='/search-character' element={<SearchCharacter />} />
            </Routes>
          </main>
        </BrowserRouter>
      </FavoritesDataProvider>
    </>
  )
}

export default App
