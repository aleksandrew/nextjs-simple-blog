// outsource dependencies

// local dependencies
// import { StateType } from '../store';
// import { DataPayload, TYPES } from '../constants/types';
// import { StateType } from './index';
import { TYPES } from '../constants/types';

export const initialState: any = {
    data: [],
    currentPage: 1,
};

export const selector = (state: any) => state.home;

const reducer = (state = initialState, action: any) => {
    const { type, ...options } = action;

    switch (type) {
        case TYPES.DATA:
            console.log(options)
            return { ...state, ...options };

        default:
            return state;
    }
};

export default reducer;
