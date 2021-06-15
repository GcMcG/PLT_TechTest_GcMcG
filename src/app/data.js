import stock from '../../json/stock.json';
import transactions from '../../json/transactions.json';

const data = {
    // sku - string (sku id to search for)
    //
    // searches through transactions to match the id
    // if it finds the sku it will then loop over stock
    // adding any values to the default of 0 and will
    // then return:
    //
    // {
    //    sku: string (sku id if found),
    //    qty: number (total stock quantity)
    // }
    searchStockBySku: async (sku) => {

        return await new Promise((resolve, reject) => {
            
            let stockTotal = 0;
            let matchingTransactions = [];


            //first search transactions
            matchingTransactions = transactions.filter(item => {
                return item.sku === sku
            });


            //no matches
            if(!matchingTransactions 
                || matchingTransactions.length === 0) {

                reject(new Error("No transactions found for given SKU"));
            }

            //loop over matching transactions and calculate total
            stock.forEach((item) => {
                if(item.sku === sku
                    && item.stock
                    && typeof(item.stock) === 'number') {
                    
                    let totalStockQty = 0;
                    // loop over the matching transactions and get the total quantity of 
                    // stock.
                    matchingTransactions.forEach(matchingTransactionItem => {
                        switch (matchingTransactionItem.type) {
                            case "order":
                                totalStockQty += matchingTransactionItem.qty;
                            break;
                            case "refund":
                                totalStockQty -= matchingTransactionItem.qty;
                            break;
                        }
                    });

                    //calculate the stock total
                    stockTotal += item.stock * totalStockQty;

                }
            });

            //return the total
            resolve({
                sku: sku,
                qty: stockTotal
            });
                
        });

    
    },


    //Extra function to test special case of no matching sku
    findSkuWithNoStock: () => {
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
};

export default data;