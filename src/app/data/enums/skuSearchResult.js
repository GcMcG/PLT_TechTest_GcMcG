export default (sku, qty) => {
    if(sku == null
        || typeof sku === 'string') {
        
            throw Error("sku must be a string");
    }
    if(qty == null 
        || Number(qty) == NaN) {
        
            throw Error("qty must be a number");

    }
   
    return {
        sku: sku,
        qty: qty
    };
};