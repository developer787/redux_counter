import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from './sagaMonitor'
import rootSaga from './sagas';
import {createLogger} from 'redux-logger'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = applyMiddleware(createLogger(), sagaMiddleware)

const store = createStore(reducers, middleware)
sagaMiddleware.run(rootSaga);

export default store
