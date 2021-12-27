import React, {SyntheticEvent, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Box, Tab, Tabs} from '@mui/material';
import {fetchCollectionStartAsync} from '../redux/orders/actions';
import {selectOrdersCollection} from '../redux/orders/selectors';
import DataTable from './DataTable';
import {DispatchT, OrderT} from '../redux/orders/types';
import {GlobalStateT} from '../rootReducer';


export type ConnectedStatePropsT = {
    orders: OrderT[],
};

export type ConnectedDispatchPropsT = {
    fetchCollectionStartAsync: () => void,
};

type PropsT = ConnectedStatePropsT & ConnectedDispatchPropsT;


const TabsTable = ({fetchCollectionStartAsync, orders}: PropsT) => {
  const [filterValue, setFilterValue] = useState('All');
  const [data, setData] = useState(orders);

  useEffect(() => {
    fetchCollectionStartAsync();
    setData(orders);
  }, []);

  useEffect(() => {
    setData(orders);
  }, [orders]);

  useEffect(() => {
    setData(() => {
      return filterValue !== 'All' ?
          data.filter((order) => order.status === filterValue) : orders;
    });
  }, [filterValue]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setFilterValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={filterValue} onChange={handleChange}>
          <Tab label="All" value={'All'}/>
          <Tab label="shipped" value={'shipped'}/>
        </Tabs>
      </Box>
      <div className='data-table'>
        <DataTable data={data}/>
      </div>
    </Box>
  );
};


const mapStateToProp = (state: GlobalStateT): ConnectedStatePropsT => ({
  orders: selectOrdersCollection(state),
});

const mapDispatchToProp = (dispatch: DispatchT) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProp, mapDispatchToProp)(TabsTable);
