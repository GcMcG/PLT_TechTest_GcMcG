import stock from '../../json/stock.json';
import transactions from '../../json/transactions.json';


//Extra function to test special case of no matching sku
// return 
//  sku: string
export default () => {
    return new Promise((resolve, reject) => {
        transactions.forEach(transactionItem => {
            let matchingStock = false;

            stock.forEach(stockItem => {
                if(transactionItem.sku === stockItem.sku) {
                    matchingStock = true;
                }
            });

            if(!matchingStock) {
                return resolve(transactionItem.sku);
            }
        });
    });
}