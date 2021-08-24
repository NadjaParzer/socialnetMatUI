import {createStore, combineReducers, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store: Store = createStore(rootReducer)

