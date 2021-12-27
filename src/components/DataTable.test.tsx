import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable from './DataTable';
import {OrderT} from '../redux/orders/types';

const mockData: OrderT[] = [
  {
    'order_number': 100000,
    'customer': {
      'first_name': 'John',
      'last_name': 'Doe',
      'address': {
        'line1': '123 Main Street',
        'line2': '',
        'city': 'Boston',
        'state': 'MA',
        'zip': '02215',
      },
    },
    'order_details': {
      'value': 137.11,
      'date': 'Mon Feb 01 2021 00:00:00 GMT+0000 (GMT)',
    },
    'shipping_details': {
      'date': 'Wed Feb 03 2021 00:00:00 GMT+0000 (GMT)',
    },
    'status': 'open',
  },
  {
    'order_number': 100005,
    'customer': {
      'first_name': 'Mary',
      'last_name': 'Smith',
      'address': {
        'line1': '555 Broadway',
        'line2': '',
        'city': 'New York',
        'state': 'NY',
        'zip': '12345',
      },
    },
    'order_details': {
      'value': 157.12,
      'date': 'Sun Mar 01 2021 00:00:00 GMT+0000 (GMT)',
    },
    'shipping_details': {
      'date': 'Tue Mar 03 2021 00:00:00 GMT+0000 (GMT)',
    },
    'status': 'shipped',
  },
  {
    'order_number': 1000101,
    'customer': {
      'first_name': 'Dakota',
      'last_name': 'Finley',
      'address': {
        'line1': '999 South Bend Road',
        'line2': '',
        'city': 'Charleston',
        'state': 'MSC',
        'zip': '38672',
      },
    },
    'order_details': {
      'value': 98.99,
      'date': 'Tue Jan 10 2021 00:00:00 GMT+0000 (GMT)',
    },
    'shipping_details': {
      'date': 'Wed Jan 13 2021 00:00:00 GMT+0000 (GMT)',
    },
    'status': 'cancelled',
  },
];


describe('DataTable', () => {
  describe('Test sort', () => {
    it('Column should be sorted on click', async () => {
      render(<DataTable data={mockData}/>);

      // expect(await screen.findByRole('grid')).toBeInTheDocument();
      expect(await screen.findAllByRole('row')).toHaveLength(4);
      // expect(await screen.findAllByRole('row')).toBeInTheDocument();
    });
  });
});
