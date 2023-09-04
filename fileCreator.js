import * as fs from 'fs';

const headers = {'fromAddress':{'address':'','arkhamEntity':{'name':'','website':'','twitter':''}},'fromIsContract':'','toAddress':{'address':'','arkhamEntity':{'name':'','website':'','twitter':''}},'blockTimestamp':'','tokenName':'','tokenSymbol':'','historicalUSD':'','chain':''};

const addToFile = function(dataToAdd){

    fs.appendFileSync('arkham-leads.txt', dataToAdd, function (err) {
        if (err) console.log(err);
    });

}

const createCSVRow = function(transactionData,objectToFill_) {

    let objectToFill = Object.assign({},objectToFill_);

    for(var key in objectToFill){

        if(typeof objectToFill[key] != 'object'){

            if(transactionData.hasOwnProperty(key)){

                addToFile(transactionData[key] + ',');

            }

            else{

                addToFile(',');

            }
        }

        else{

            if(transactionData.hasOwnProperty(key)){

                createCSVRow(transactionData[key],objectToFill[key]);

            }

            else{

                createCSVRow(objectToFill[key],objectToFill[key]);

            }
        }

    }

    return objectToFill;

}

const objectToCSV = function(dataObject){

    for (var key in dataObject){
        
        if(dataObject[key]['type'] != 'internal'){

            createCSVRow(dataObject[key],headers);

            addToFile('\r\n');

        }

    };
}


    
export { objectToCSV };

