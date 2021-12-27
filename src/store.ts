import {applyMiddleware, createStore, compose, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

let middleware = applyMiddleware(
    thunk,
);

if (process.env.NODE_ENV !== 'production') {
  let composeEnhancers;
  const windowEnv: any = window;
  if (windowEnv.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = windowEnv.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeEnhancers = compose;
  }
  middleware = composeEnhancers(middleware);
}

export const store: Store = createStore(rootReducer, {}, middleware);
