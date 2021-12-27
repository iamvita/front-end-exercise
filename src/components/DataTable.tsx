import React from 'react';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import {Box} from '@mui/material';
import {OrderT} from '../redux/orders/types';


const columns: GridColDef[] = [
  {
    field: 'order_number',
    headerName: 'Order Number & Date',
    headerClassName: 'heading-table',
    width: 250,
    renderCell: (params: GridRenderCellParams<Date>) => {
      return (
        <Box>
          <div className='order-number'>#{params.row.order_number}</div>
          <div className='order-updated'>
            Ordered: {params.row.order_details.date.substring(4, 15)}</div>
        </Box>
      );
    },
  },
  {
    field: 'status',
    headerName: 'Shipping Status',
    headerClassName: 'heading-table',
    width: 250,
  },
  {
    field: 'address',
    headerName: 'Customer Address',
    headerClassName: 'heading-table',
    sortable: false,
    width: 300,
    renderCell: (params: GridRenderCellParams<Date>) => {
      return (
        <Box>
          <div>{params.row.customer.address.line1}</div>
          <div>Ordered: {`${ params.row.customer.address.city },
                    ${params.row.customer.address.state}
                    ${params.row.customer.address.zip}`}</div>
        </Box>
      );
    },
  },
  {
    field: 'order_details',
    headerName: 'Order Value',
    headerClassName: 'heading-table',
    width: 200,
    valueGetter: (params) => {
      return `${params.row.order_details.value}$`;
    },
  },
];
const ROWS_PER_PAGE = 10;

const DataTable = ({data}: { data: OrderT[] }) => {
  return (
    <div style={{height: 400, width: '100%'}}>
      {
        <DataGrid
          rows={data}
          columns={columns}
          loading={data.length === 0}
          pageSize={5}
          getRowId={(row) => row.order_number}
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          rowHeight={80}
          checkboxSelection
          autoHeight
          sx={{
            background: 'white',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
          }}
        />
      }
    </div>
  );
};

export default DataTable;
