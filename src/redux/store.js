import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import projectReducer from './project/project-reducer';

const rootReducer = combineReducers({projectReducer});
export const Store = createStore(rootReducer, applyMiddleware(thunk));
