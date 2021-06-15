import React from 'react';

const StockSearchResult = (props) => {
    return(
        <div id="stockSearchResult">
            <label htmlFor="sku">SKU</label>
            <div id="sku">{ props.sku }</div>

            <label htmlFor="stockqty">Total</label>
            <div id="stockqty">{ props.stockTotal }</div>

        </div>
    )
}

export default StockSearchResult;