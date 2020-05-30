import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initialState as initialStateStore, TStore } from './rootReducer';
import rootSaga from './rootSaga';
import { useMemo } from 'react';

let store: any;

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const configureStore = (initialState = initialStateStore): TStore => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        bindMiddleware([sagaMiddleware]),
    );

    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const initializeStore = (preloadedState: any) => {
    let _store = store ?? configureStore(preloadedState)

    if (preloadedState && store) {
        _store = configureStore({
            ...store.getState(),
            ...preloadedState,
        })

        store = undefined
    }

    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
}

export function useStore(initialState: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
