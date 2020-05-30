// outsource dependencies
import { combineReducers, Store as ReduxStore } from 'redux';

// local dependencies
import home, { initialState as homeState } from './reducers/home';

export const initialState = {
    home: homeState,
};

const rootReducer = combineReducers({
    home,
});

export type TState = ReturnType<typeof rootReducer>;
export type TStore = ReduxStore<typeof initialState>;

export default rootReducer;
