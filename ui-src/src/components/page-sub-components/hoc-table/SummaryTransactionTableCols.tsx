// Main Imports
import * as React from 'react';
// import * as matchSorter from 'match-sorter';
// local imports :
import { StateProps, DispatchProps } from '../../../containers/HoloFuelAppRouterContainer';
import TransactionDetailsButton from "../transaction-details-button/TransactionDetailsButton";
import Jdenticon from "../avatar-generator/Jdenticon";
// MUI Custom Style Imports :
import SearchIcon from '@material-ui/icons/Search';
import Today from '@material-ui/icons/Today';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SwapVerticalCircle from '@material-ui/icons/SwapVerticalCircle';
import ChangeHistory from '@material-ui/icons/ChangeHistory';
import Info from '@material-ui/icons/Info';
import List from '@material-ui/icons/List';
// import Receipt from '@material-ui/icons/Receipt';

export type Props = DispatchProps & StateProps;

/* Transaction Table Headers */
const pending_transaction_table_columns = (props: Props, state: any, cb:() => void) => {
  // console.log("Table Columns Props", props);
  // console.log("Table Columns State", state);

  // const resetCB = cb("reset");

  const table_columns = [{
    Header: (row: any) => (<Today/>),
    id: 'originTimeStamp',
    accessor: 'originTimeStamp',
    // accessor: (d:any) => d.originTimeStamp,
    filterable: true,
    Filter: ({filter, row, onChange}:any) => (
        <div style={{position: 'relative'}}>
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              fontSize: '.8rem',
              width: '100%',
              backgroundColor: 'transparent'
            }}
          />
          <SearchIcon />
        </div>
     ),
     FilterAll: true,
     Cell: (row: any) => (
        <div style={{ padding: '5px' }}>
        { row.value }
        </div>
     )
    }, {
    Header: (row: any) => (<AccountCircle/>),
    accessor: 'counterparty',
    id: 'counterparty',
    filterable: true,
    Filter: ({filter, rows, onChange}:any) => (
        <div style={{position: 'relative'}}>
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              fontSize: '.8rem',
              width: '100%',
              backgroundColor: 'transparent'
            }}
          />
          <SearchIcon style={{color:"#799ab6"}} />
        </div>
    ),
    FilterAll: true,
    Cell: (row: any) => (
        <div style={{ padding: '5px' }}>
          {row.value ?
            <span>
              <Jdenticon hash={row.value} size="35px" {...props}/>
              <p style={{fontSize:'.5rem', margin:'0 auto', marginTop:'2px'}}>{row.value}</p>
            </span>
          :
            <span/>
          }
        </div>
      )
    }, {
    Header: (row: any) => (<SwapVerticalCircle/>),
    id: 'originEvent',
    accessor: 'originEvent',
    filterable: true,
    Filter: ({filter, row, onChange}:any) => (
        <div style={{position: 'relative'}}>
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              fontSize: '.8rem',
              width: '100%',
              backgroundColor: 'transparent'
            }}
          />
          <SearchIcon style={{color:"#799ab6"}} />
        </div>
    ),
    FilterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
        {/* style={{ padding: '5px', color:{props.amountColor} }} */}
      { row.value}
      </div>
      )
    }, {
    Header: (row: any) => (<ChangeHistory/>),
    id: "amount",
    accessor: (d:any) => d.amount,
    filterable: true,
    Filter: ({filter, row, onChange}:any) => (
        <div style={{position: 'relative'}}>
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              fontSize: '.8rem',
              width: '100%',
              backgroundColor: 'transparent'
            }}
          />
          <SearchIcon style={{color:"#799ab6"}} />
        </div>
    ),
    FilterAll: true,
    Cell: (row: any) => (
      <div style={{ padding:'5px', fontSize:"1rem"}}>
        {row.original.status.split("/")[0] === "incoming" ?
            <span className="increasedBalance" style={{color:"#00828d"}}>
              +{ row.value } HF
            </span>

        : row.original.status.split("/")[0] === "outgoing" ?
            <span className="decreasedBalance" style={{color:"#b85eb3"}}>
              -{ row.value } HF
            </span>

        : row.original.status.split("/")[0] === "pending" &&
          row.original.status.split("/")[1] === "spender" ?
            <span className="decreasedBalance" style={{color:"#b85eb3"}}>
            -{ row.value } HF
            </span>

        :  row.original.status.split("/")[0] === "pending" &&
           row.original.status.split("/")[1] === "recipient" ?
            <span className="increasedBalance" style={{color:"#00828d"}}>
            +{ row.value } HF
            </span>
        :
            <div/>
        }
      </div>
      )
    }, {
    Header: (row: any) => (<Info/>),
    id: 'status',
    accessor: 'status',
    // filterable: true,
    // Filter: ({filter, row, onChange}:any) => (
    //     <div style={{position: 'relative'}}>
    //       <input
    //         onChange={event => onChange(event.target.value)}
    //         value={filter ? filter.value : ''}
    //         style={{
    //           fontSize: '.8rem',
    //           width: '100%',
    //           backgroundColor: 'transparent'
    //         }}
    //       />
    //       <SearchIcon style={{color:"#799ab6"}} />
    //     </div>
    // ),
    // FilterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
        <TransactionDetailsButton
          {...props}
          column="status"
          transactionState={row.value}
          rowInfo={row}
          resetPage={() => cb()}
        />
      </div>
      )
    }, {
      Header: (row: any) => (<List/>),
    id: 'todo',
    accessor: 'status', // change to "todo" once created
    Cell: (row: any) => (
      <div>
        <TransactionDetailsButton
          {...props}
          column="todo"
          transactionState={row.value}
          rowInfo={row}
          resetPage={() => cb()}
        />
      </div>
      )
    }]
  return table_columns;
};
export default pending_transaction_table_columns;


export const processed_transaction_table_columns = (props: Props, state: any) => {
  // console.log("Table Columns Props", props);
  // console.log("Table Columns State", state);
  const table_columns = [{
    Header: 'Transaction Date',
    accessor: 'transaction_timestamp',
    filterAll: true,
      Cell: (row: any) => (
        <div style={{ padding: '5px' }}>
        { row.value }
        </div>
      )
    }, {
    Header: 'Amount',
    accessor: 'amount',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value }
      </div>
      )
    }, {
    Header: 'Action',
    accessor: 'action',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value }
      </div>
      )
    }, {
    Header: 'Counterparty',
    accessor: 'counterparty',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value }
      </div>
    )
   }]
  return table_columns;
};
