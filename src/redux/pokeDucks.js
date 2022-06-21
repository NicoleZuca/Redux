import axios from "axios"

// constantes
const dataInicial = {
    array : [],
    offset: 0
}

// TYPES generalmente van en mayúsculas
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'

// reducer
//cuando nosotros obtengamos una acción de obtenerPokemonesAccion en nuestro reducer se van a enviar todas esas listas de pokemones al state, entonces nuestro 
//state ya no va a estar vacia sino que va a tener toda la lista de pokemones
export default function pokeReducer(state = dataInicial, action){ //entre () va a ir el estado inicial y las acciones
    //el switch va a leer la acción (que es el try catch de obtenerPokemonesAccion) y luego va a leer el tipe (OBTENER_POKEMONES_EXITO) y va a generar un case
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload} //con ... accedemos al array
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, array: action.payload.array, offset: action.payload.offset}        
        default: 
            return state    
    }
}

// acciones
//Se ocupan 2 funciones de flecha, porque en la primera función vamos a recibir los parámetros que nosotros necesitemos enviar a la función obtenerPokemonesAccion,
//la segunda función necesita parametros los cuales son dispatch para activar el reducer y getState para obtener la información que se este almacenando en el state
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    // console.log('getState', getState().pokemones.offset)
    const offset = getState().pokemones.offset 

    try{
        //crea una constante que guarde la respuesta de la espera de axios.get y le pasamos la URL el offset entre {} es para que lea la funcion que declaramos arriba
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`) 
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    }catch (error){
        console.log(error)
    }
}

export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {
    //Para que muestre los siguientes 20 pokemones del array

    const offset = getState().pokemones.offset
    const siguiente = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}