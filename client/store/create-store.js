import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';

function extensionResolve() {
    if (typeof window !== 'undefined') {
        return (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f; // eslint-disable-line no-underscore-dangle
    }
    return (f) => f;
}

const initalStoreState = {};

const store = createStore(
    rootReducer,
    initalStoreState, // initial state
    compose(
        // If you are using the devToolsExtension, you can add it here also
        extensionResolve(),
    ),
);

export default store;