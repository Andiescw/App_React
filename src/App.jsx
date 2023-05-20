import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './componentes/NavBar/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { Formulario } from './componentes/Formulario/Formulario';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './componentes/CartContainer/CartContainer';


function App() {

  return (
    //<div className="App">
      <BrowserRouter>
            <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:category' element={ <ItemListContainer /> } />

          <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={ <CartContainer /> } />

          // Cualquier otro link que no este definido te regresa a Home
          <Route path='*' element={ <Navigate to='/' />}/>
          {/*<Route path='/form' element={  } />*/}
            
        </Routes>
            {/* <Formulario /> */}
    
      </BrowserRouter>
      
    //</div>
  )
}

export default App
