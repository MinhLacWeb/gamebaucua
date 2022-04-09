import {combineReducers,createStore} from 'redux';
import {GameBauCuaReducer} from "./reducers/GameBauCuaReducer"


//rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    GameBauCuaReducer,
    //
});



export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());