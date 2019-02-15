// import { DateTime } from 'luxon';
// To Parse from IS0-8601 (date as supplied by Rust Code) through use of Luxon :
//   > DateTime.fromISO("2017-05-15")  //=> May 15, 2017 at midnight
//   > DateTime.fromISO("2017-05-15T08:30:00")  //=> May 15, 2017 at 8:30
// const dt = DateTime.local();
// Luxon examples with local DateTime (ie:dt)
  // dt.year     //=> 2017
  // dt.month    //=> 9
  // dt.day      //=> 14
  // dt.second   //=> 47
  // dt.weekday  //=> 4

/*/////////////////////////////////////////////////////////////////
   Table Data Generation Refactor Helper Function - Final Obj
 //////////////////////////////////////////////////////////////////*/
const dataRefactor = (transaction_details: any) => {
  console.log("APPDETAILS:-------------->",transaction_details);
  const APP_LIST_LENGTH = transaction_details.length;

  const insertAppDetails = (transaction: any) => {
    // console.log("transaction", transaction);
    if (transaction !== parseInt(transaction, 10)) {
      const newTxObj = {
        originTimeStamp: transaction.originTimeStamp, // timestamp of the intial Transaction
        amount:  transaction.amount,
        action: transaction.type,
        counterparty: transaction.hash,
        status: transaction.status,
        transaction_timestamp: transaction.transaction_date, //timestamp of the current Transaction
        eventCommitHash:transaction.eventCommitHash,
        dueDate: transaction.dueDate,
        notes: transaction.notes,
        // originCommitHash: transaction.originCommitHash,
        // inResponseToTX?: tranaction.inResponseToTX
      };
      console.log("newTxObj", newTxObj);
      return newTxObj;
    }
    else {
      return "";
    }
  }

  const range = (length: number) => {
    const lengthArray: Array < any > = [];
    for (let i = 0; i < length; i++) {
      lengthArray.push(i);
    }
    return lengthArray;
  }

  const dataGenerate = (length: number = APP_LIST_LENGTH) => {
    return transaction_details.map((transaction: any) => {
      return {
        ...insertAppDetails(transaction),
        children: range(length - 1).map(insertAppDetails) // # per page...
      };
    })
  }
  return dataGenerate()
}

//////////////////////////////////////////////////////////////////////////////////
          /* Data for Pending Transactions Table Overview */
//////////////////////////////////////////////////////////////////////////////////
export const refactorListOfTransactions = (list_of_transactions: any) => {
  console.log("list_of_transactions >> check to see list of TRANSACTIONS : ", list_of_transactions);

  const list_of_refactored_transactions = list_of_transactions.transactions.map((tx: any) => {
    // const originTxDate = DateTime.fromISO(tx.timestamp);
    console.log("transaction.transactions.timestamp >> ORIGIN TIMESTAMP <<", tx.timestamp)
    const txEvent = tx.event;
    console.log("transaction.transactions.event", txEvent);

    let amount: number | null = null;
    let counterparty: string | undefined = undefined;
    let dueDate: string | undefined = undefined;
    // let txTimestamp: string; // FIND way to get acess to this for all tx types...
    let notes: string | undefined = undefined;
    // let eventCommitHash : string; // FIND way to get acess to this for all tx types...
    let inResponseToTX: string | undefined = undefined;

    switch (txEvent) {
      case 'request' :
        amount =  txEvent.amount;
        counterparty = txEvent.to;
        dueDate = txEvent.deadline;
        notes = txEvent.notes;
        // eventCommitHash =  tx.origin; // FIND way to get acess to this for all tx types...
        inResponseToTX = undefined;
        // txTimestamp = ;
      break;

      case 'proposal' :
        amount =  txEvent.tx.amount;
        counterparty = txEvent.tx.to;
        dueDate = txEvent.tx.deadline;
        notes = txEvent.tx.notes;
        inResponseToTX: tx.request;
        // txTimestamp = ;
        // eventCommitHash = ;
        break;

        case 'decline' :
          break;

        case 'reject' :
          break;

        case 'refund' :
          break;
      }

      return {
        originTimeStamp: tx.timestamp,
        amount,
        action: txEvent,
        counterparty,
        status: tx.state,
        originCommitHash: tx.origin,
        dueDate: dueDate,
        notes: notes,
        inResponseToTX,
        // eventCommitHash:, // commit hash for the currently displayed Transaction
        // transaction_timestamp:, // timestamp of the currently displayed Transaction
      };
    });

  console.log("list of current TRANSACTIONS", list_of_refactored_transactions);
  return dataRefactor(list_of_refactored_transactions);
};


// Locate Most Recent State for each Transaction : Helper Function
// const listTxByOriginAddress = (tx_list: any) => {
//   // iterate over tx_list, checking the Origin Commit Hash
//   let arrayOfTxChains: Array<any> = [];
//
//   for (let tx of tx_list) {
//     let transaction_obj = tx!.transactions;
//     let tx_origin_address = tx!.transactions.origin;
//     if (tx_origin_address !== [arrayOfTxChains]) {
//       arrayOfTxChains.push({tx_origin_address:[transaction_obj]});
//     }
//     else if (tx_origin_address === [arrayOfTxChains]) {
//         tx_origin_address.push({transaction_obj});
//     }
//   }
//   console.log(">>>>>>>>> arrayOfTxChains <<<<<<<<< : ", arrayOfTxChains);
// }


// const isoloateTxMostRecentState = (txListByOriginAddress: any) => {
//   let filtered_tx_list = [];
//   filtered_tx_list = txListByOriginAddress.filter((tx: any) => {
//       // currently sorting by date to locate the most recent event/state for each tx:
//       // Luxon: d1 < d2 // is d1 before d2?
//       // (Luxon Ref: https://moment.github.io/luxon/docs/manual/math.html#comparing-datetimes)
//       let most_recent_event : any;
//       let most_recent_event_date: any;
//       for(let tx_event of tx ) {
//         // let current_event_date = tx_event.timestamp.fromISO();
//         if(!most_recent_event_date){
//           most_recent_event_date = tx_event.timestamp;
//           most_recent_event = tx_event;
//         }
//         else if (tx_event.timestamp > most_recent_event_date){
//           most_recent_event_date = tx_event.timestamp;
//           most_recent_event = tx_event;
//         }
//       }
//       console.log("===>>>> most_recent_event_date", most_recent_event_date)
//       return most_recent_event;
//   });
//
//   console.log(" ====>>>> filtered_tx_list <<<===== ", filtered_tx_list);
//   return filtered_tx_list;
// }


// mostRecentEvent = tx.filter(tx_event => {
//   let current_event_date = tx_event.timestamp;
//     return current_event_date > most_recent_event_date
// });

// ref, from hc-admin
// const findDnaInstances = (dna_id, info_instances) => {
//   let dna_instances = [];
//   dna_instances = info_instances.filter(app => {
//       return app.dna === dna_id
//   });
//   return dna_instances;
// }



















//
