import * as fs from 'fs';

const headers = {'fromAddress':'','arkhamEntity':'','toAddress':'','blockTimestamp':'','tokenSymbol':'','historicalUSD':'','chain':''};
const createCSVRow = function(dataObject) {


    var dataArray = new Array;

    for (var o in dataObject) {

        console.log(`${o} ||| ${dataObject[o]}`)
        if(!(typeof dataObject[o] == 'object')){

            let innerValue = dataObject[o]===null?'':dataObject[o].toString();
            let result = innerValue.replace(/"/g, '');
            result = '' + result + ',';
            dataArray.push(result);

        }

        /*
        Logic to deal with nested objects
        */

        
        else{
            let arrayToAdd = createCSVRow(dataObject[o]);
            console.log('ARRAYTOADD ' + typeof arrayToAdd.split(',') );
            Object.assign(dataArray, arrayToAdd.split(','));
            
            /*
            for (var m in dataObject[o]) {

                var innerValue = dataObject[o][m]===null?'':dataObject[o][m].toString();
                var result = innerValue.replace(/"/g, '');
                result = '' + result + ',';
                dataArray.push(result);
        
            } */

        }

    }

    return dataArray.join(' ') ;
}

const objectToCSV = function(dataObject){

    for (var key in dataObject){
        let data = dataObject[key];
    

        let dataToAdd = createCSVRow(data);
        fs.appendFile('arkham-leads.txt', dataToAdd + '\r\n', function (err) {
            if (err) console.log(err);
        });

        

    };
}


    
export { objectToCSV };

