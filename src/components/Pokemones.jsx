import React from 'react';

import { useDispatch, useSelector } from 'react-redux'; // useDispatch nos va a servir para consumir nuestra acción y useSelector nos servirá para leer el array del state principal
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDucks';

const Pokemones = () => {
    const dispatch = useDispatch()

    //el useSelector devuelve todo lo que tenemos en store y lo muestra en consola
    const pokemones = useSelector(store => store.pokemones.array)

    return (  
        <div>
            Lista de pokemones
            {/*El dispatch llama a la acción, por lo tanto esto es una función que dentro de su función llama a la acción en específico y con eso la lista de pokemones va a viajar directamente al array*/}
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <button onClick={() => dispatch(siguientePokemonAccion(20))}>Siguiente</button>
            <ul>
                {pokemones.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

{/* Una vez que presionemos el botón va a ser un try, donde va a intentar consumir esa api, en el caso de que no falle vamos a ejecutar el dispatch, ese dispatch va a generar un type
que es OBTENER_POKEMONES_EXITO, como tenemos el switch, va a leer el OBTENER_POKEMONES_EXITO y va a ejecutar nuestro return, pero sin antes de que nosotros le enviemos el payload que es 
toda nuestra información (los pokemones), estos pokemones van a viajar al action con la llave payload, por lo tanto en el return, devolvemos el state que en este caso va a ser el array
que está vacío pero le vamos a indicar que además, el array ya no sea un array vacío sino que va a ser lo que venga en el payload, es decir todo el array de pokemones */}
 
export default Pokemones;