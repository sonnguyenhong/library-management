import { combineReducers } from 'redux';
import userReducer from './user';
import notifyReducer from './notify';
import booksReducer, {
    createBookReducer,
    deleteBooksReducer,
} from '../../containers/app/screens/ManageBook/redux/reducer';
import brReducer, { createBrReducer, deleteBrReducer } from '../../containers/app/screens/BorrowReturn/redux/reducer';
import readerReducer, {
    createReaderCardReducer,
    createReaderReducer,
    getReaderDetailReducer,
} from '../../containers/app/screens/Reader/redux/reducer';

const createReducer = (asyncReducers) => {
    return combineReducers({
        user: userReducer,
        notify: notifyReducer,
        books: booksReducer,
        createBook: createBookReducer,
        deleteBook: deleteBooksReducer,
        borrowReturn: brReducer,
        createBorrowReturn: createBrReducer,
        reader: readerReducer,
        createReader: createReaderReducer,
        getReaderDetail: getReaderDetailReducer,
        createReaderCard: createReaderCardReducer,
        ...asyncReducers,
    });
};

export default createReducer;
