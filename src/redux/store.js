import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
    //aqui se debe declarar todos los archivos Ducks que realicemos
    pokemones: pokeReducer
})

//esta constante pregunta si tenemos instalada la extensión y en caso de que no va a ocupar el compose que estamos llamando de redux
//solamente es para configurar la extensión de google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    //configuración del store
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store; 
    //devueve todo lo que estamos combinando en const rootReducer = combineReducers que en este caso solo es un Duck
 }
