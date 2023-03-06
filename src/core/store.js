import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import personalHomepageReducer from '../features/personalHomepageSlice';
import themeReducer from '../common/theameSlice';
import saga from './saga';

const createSagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;