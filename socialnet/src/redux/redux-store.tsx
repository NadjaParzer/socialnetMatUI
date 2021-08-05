import {createStore, combineReducers, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

export type ReduxStoreType =  Store & ReturnType<typeof reducers>

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export const store = createStore(reducers)


