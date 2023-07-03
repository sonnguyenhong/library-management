import { combineReducers } from 'redux';
import userReducer from './user';
import notifyReducer from './notify';
import booksReducer, {
    createBookReducer,
    deleteBooksReducer,
} from '../../containers/app/screens/ManageBook/redux/reducer';
import brReducer, {
    createBrReducer,
    deleteBrReducer,
    updateBrReducer,
} from '../../containers/app/screens/BorrowReturn/redux/reducer';
import readerReducer, {
    createReaderCardReducer,
    createReaderReducer,
    deleteReaderCardReducer,
    getReaderDetailReducer,
    updateReaderCardReducer,
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
        updateBorrowReturn: updateBrReducer,
        reader: readerReducer,
        createReader: createReaderReducer,
        getReaderDetail: getReaderDetailReducer,
        createReaderCard: createReaderCardReducer,
        deleteReaderCard: deleteReaderCardReducer,
        updateReaderCard: updateReaderCardReducer,
        ...asyncReducers,
    });
};

export default createReducer;
