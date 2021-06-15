///
// Main page containing an input to search for sku stock totals
// and an area for the totals to be displayed
///
import React, { useState } from 'react';
import data from './data.js';
import StockSearchResult from './stockSearchResult.js';

export default (props) => {
    const [skuSearch, setSkuSearch] = useState(props.skuSearch || ""); // sku search value, defaults to empty or loaded from props if available
    const [stockTotal, setStockTotal] = useState(null);
    const [foundSku, setFoundSku] = useState("");

    const skuSearchTextChanged = (e) => {
        setSkuSearch(e.target.value);
    };

    //call the main search stock function
    const callSearchStock = async (e) => {
        data.searchStockBySku(skuSearch)
        .then(result => {
            setStockTotal(result.qty);
            setFoundSku(result.sku);
        })
        .catch(err => {
            setStockTotal(null);
            alert(err.message || "An unexpected error occured");
        });
        
    };

    //extra method for test purposes
    //calls an extra method to find an sku with no stock
    //then calls the main search stock function
    const callAutoSearchMissingStock = async (e) => {
        data.findSkuWithNoStock()
        .then(result => {
            data.searchStockBySku(result)
            .then(result => {
                setStockTotal(result.qty);
                setFoundSku(result.sku);
            })
            .catch(err => {
                setStockTotal(null);
                alert(err.message || "An unexpected error occured");
            });
        })
    };

    return (
        <div id="main">
            <label htmlFor="sku_input">Enter an SKU to retrieve their stock totals</label>
            <input id="sku_input" type="text" onChange={skuSearchTextChanged} />
            <input id="sku_search" type="button" onClick={callSearchStock} value="Search"  />
            <input id="sku_search_with_no_match" type="button" onClick={callAutoSearchMissingStock} value="Auto Search Sku with no stock" />
            { stockTotal != null &&
                <StockSearchResult  sku={foundSku} stockTotal={stockTotal}  />
            }
        </div>
    );
}