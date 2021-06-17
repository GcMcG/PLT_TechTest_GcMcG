import { expect, it } from "@jest/globals";
import searchStockBySku from "./app/data/searchStockBySku.js";

describe('testSearchStockBySku', function() {
    
    it('should be defined', function() {
        expect(searchStockBySku).toBeDefined();
    });

    it('should be a function', function() {
        expect(typeof searchStockBySku).toBe('function')
    });

    it('should return new Error("No transactions found for given SKU")', function() {
        searchStockBySku("")
            .then(function(result) {
                expect(true).toBeFalsy();//always fail if no error thrown
            })
            .catch(function(err) {
                expect(err.message).toBe("No transactions found for given SKU")
            });
    });

    it('should return 0', function() {

        searchStockBySku("")
            .then(function(result) {
                expect(result).toBe(0);
            })
            .catch(function(err) {
                expect(true).toBeFalsy();//always fail if error thrown
            })
    });

    it('should return { sku: string, qty: number }', function() {

        searchStockBySku("GXC407349/62/88")
            .then(function(result) {
                expect(typeof result.sku)
                    .toBe("string");
                expect(typeof result.qty)
                    .toBe("number");                    

            })
    });

    it('should return { sku: "GXC407349/62/88", qty: 181222  }', function() {

        searchStockBySku("GXC407349/62/88")
            .then(function(result) {
                
                expect(result)
                    .toMatchObject({
                        sku: "GXC407349/62/88", 
                        qty: 181222 
                    });                    

            })
    });

})