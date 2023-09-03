import * as fs from 'fs';

const headers = {'fromAddress':{'address':'','arkhamEntity':{'name':'','website':'','twitter':''}},'toAddress':{'address':'','arkhamEntity':{'name':'','website':'','twitter':''}},'blockTimestamp':'','tokenSymbol':'','historicalUSD':'','chain':''};

const objectToString = function(objToConvert){

    let str = '';

    for (var key in objToConvert){

        if( typeof objToConvert[key] != 'object' ){
            str = str + `${objToConvert[key]},` ;
        }

        else{
            str = str + objectToString(objToConvert[key]);
        }
    }

    return str;

}

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

        createCSVRow(dataObject[key],headers);
        addToFile('\r\n');

    };
}


    
export { objectToCSV };

