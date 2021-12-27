import {combineReducers} from 'redux';
import orderReducer from './redux/orders/reducers';
import {OrdersStateT} from './redux/orders/types';

export type GlobalStateT = {
  orders: OrdersStateT,
}

export default combineReducers({
  orders: orderReducer,
});
