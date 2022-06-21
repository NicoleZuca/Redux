import React from 'react';
import Pokemones from './components/Pokemones';

import {Provider} from 'react-redux'; //es para envolver todos los componentes que se van a llamar
import generateStore from './redux/store';

function App() {

  const store = generateStore() //esta función devuelve toda la tienda

  return (
    <Provider store={store}>
      <Pokemones/>
    </Provider>
  );
}

export default App;

