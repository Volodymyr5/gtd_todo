import {SET_USER_AGE, SET_USER_NAME} from './project-actions';

const initialState = {
    name: '',
    age: 0,
};

export default function projectReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload};
        case SET_USER_AGE:
            return {...state, age: action.payload};
        default:
            return state;
    }
}
