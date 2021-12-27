import {OrdersStateT, OrderT} from './types';
import {GlobalStateT} from '../../rootReducer';

export const selectOrders = (state: GlobalStateT): OrdersStateT => {
  return state.orders;
};

export const selectOrdersCollection = (state: GlobalStateT): OrderT[] => {
  return state.orders.collection;
};
