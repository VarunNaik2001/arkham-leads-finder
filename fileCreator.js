import * as fs from 'fs';

const headers = {'fromAddress':8};
const createCSVRow = function(dataObject) {

    /*
    Creating Headers
    */

    var dataArray = new Array;

    for (var o in dataObject) {

        if(!(typeof dataObject[o] == 'object')){


            var innerValue = dataObject[o]===null?'':dataObject[o].toString();
            var result = innerValue.replace(/"/g, '');
            result = '' + result + ',';
            dataArray.push(result);

        }

        /*
        Logic to deal with nested objects
        */

        
        else{

 
            for (var m in dataObject[o]) {

                var innerValue = dataObject[o][m]===null?'':dataObject[o][m].toString();
                var result = innerValue.replace(/"/g, '');
                result = '' + result + ',';
                dataArray.push(result);
        
            } 

        }

    }

    console.log(dataArray.length);
    return dataArray.join(' ') + '\r\n';
}

const objectToCSV = function(dataObject){

    for (var key in dataObject){
        let data = dataObject[key];
    

        let dataToAdd = createCSVRow(data);
        
        fs.appendFile('arkham-leads.txt', dataToAdd, function (err) {
            if (err) console.log(err);
        });

        

    };
}
    
export { objectToCSV };

