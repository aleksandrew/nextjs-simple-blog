// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import home from './sagas/home';

function* rootSaga() {
    yield fork(home);
}

export default rootSaga;
