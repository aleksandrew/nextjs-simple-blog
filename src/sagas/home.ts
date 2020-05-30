// outsource dependencies
import { takeEvery, put, call, select } from 'redux-saga/effects';

// local dependencies
import { getData } from '../services/api';
// import { DATA } from '../reducers/action';
import { TYPES } from '../constants/types';

function* getPost({ ...payload }) {
    // const { page } = payload.payload;
    // const currentData = yield select((state) => state.app.data);

    try {
        const data = yield call(getData);

        yield put({type: TYPES.DATA, data});
    } catch (e) {
        console.warn(e);
    }
}

export default function* () {
    yield takeEvery(TYPES.GET_DATA, getPost);
}
