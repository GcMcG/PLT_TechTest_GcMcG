The function is located in data.js called searchStockBySku()

Written as a basic website, contains a simple view (main.js, stockSearchResult.js) where you can use an input text box to search for stock totals by SKU string. 

I also wrote another test function (in data.js) that searches through the transactions.json and finds the first one with no matching stock. Just as a simple way to test that special case.


To install:

1- clone repository to hosting environment (tested using XAMMP)

2- in a terminal opened in the root folder type:

npm i
npm run start

This will install all node modules and run webpack to minify the files down into a file called skusearch.bundle.js in dist folder.

3- browse to the location where the files have been hosted
