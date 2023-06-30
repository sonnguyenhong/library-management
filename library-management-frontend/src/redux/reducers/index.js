import { combineReducers } from 'redux';
import userReducer from './user';
import notifyReducer from './notify';
import booksReducer, { createBookReducer } from '../../containers/app/screens/ManageBook/redux/reducer';

const createReducer = (asyncReducers) => {
    return combineReducers({
        user: userReducer,
        notify: notifyReducer,
        books: booksReducer,
        createBook: createBookReducer,
        ...asyncReducers,
    });
};

export default createReducer;
