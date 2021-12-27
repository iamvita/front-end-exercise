import {OrderAction} from './actionTypes';
import {OrdersStateT} from './types';

const initialState: OrdersStateT = {
  collection: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case OrderAction.FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case OrderAction.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };
    case OrderAction.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
