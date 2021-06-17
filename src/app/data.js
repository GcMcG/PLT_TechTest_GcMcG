import searchStockBySku from './data/searchStockBySku.js';
import findSkuWithNoStock from './data/findSkuWithNoStock.js';

//Simple container for the above imported data functions
const data = {
    //main search function
    // accepts sku string
    // return skuSearchResult {
    //      sku: string
    //      qty: number    
    //}
    "searchStockBySku": searchStockBySku,

    //extra test function (likely to be made redundant by unit testing)
    // return
    //      sku: string
    "findSkuWithNoStock": findSkuWithNoStock
};

export default data;