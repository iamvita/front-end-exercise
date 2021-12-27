import {OrderAction} from './actionTypes';
import {DispatchT, OrderT} from './types';

const URL = 'https://gist.githubusercontent.com/ryanjn/07512cb1c008a5ec754aea6cbbf4afab/raw/eabb4d324270cf0d3d17a79ffb00ff3cfaf9acc3/orders.json';

export const fetchCollectionStart = () => {
  return {
    type: OrderAction.FETCH_ORDERS_START,
  };
};

export const fetchCollectionStartAsync = () => {
  return (dispatch: DispatchT )=> {
    setTimeout(() => {
      dispatch(fetchCollectionStart());
      fetch(URL)
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              throw (res.error);
            }
            dispatch(fetchCollectionSuccess(res));
            return res;
          })
          .catch((error) => {
            dispatch(fetchCollectionFailure(error));
          });
    }, 1000);
  };
};

export const fetchCollectionSuccess = (data: OrderT[]) => {
  return {
    type: OrderAction.FETCH_ORDERS_SUCCESS,
    payload: data,
  };
};

export const fetchCollectionFailure = (error: Error) => {
  return {
    type: OrderAction.FETCH_ORDERS_FAILURE,
    payload: error,
  };
};
