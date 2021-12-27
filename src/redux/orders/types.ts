export type Customer = {
    first_name: string,
    last_name: string,
    address: Address,
};

type Address = {
    line1: string,
    line2: string,
    city: string,
    state: string,
    zip: string,
};

export type StatusT = 'open' | 'shipped' | 'cancelled';

export type DispatchT = (action: any) => any;

export type OrderT = {
    order_number: number,
    customer: Customer,
    order_details: {
        value: number,
        date: string,
    },
    shipping_details: {
        date: string,
    },
    status: StatusT,
};

export type OrdersStateT = {
    collection: OrderT[],
    isFetching: boolean,
    errorMessage: string
};
