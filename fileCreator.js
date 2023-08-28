import * as fs from 'fs';

const objectToCSVRow = function(dataObject) {

    /*
    Creating Headers
    */

    console.log('Data Object ' + dataObject);

    var dataArray = new Array;

    for (var o in dataObject) {

        console.log( o + '|||' + dataObject[o] )

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

                console.log( m + '|||' + dataObject[o][m] )
                var innerValue = dataObject[o][m]===null?'':dataObject[o][m].toString();
                var result = innerValue.replace(/"/g, '');
                result = '' + result + ',';
                dataArray.push(result);
        
            }

        }

    }

  //  console.log(dataArray.join(' ')+'\r\n');
    return dataArray.join(' ') + '\r\n';
}

const objectToCSV = function(dataObject){

    for (var key in dataObject){
        let data = dataObject[key];
    

        let dataToAdd = objectToCSVRow(data);
        
        fs.appendFile('arkham-leads.txt', dataToAdd, function (err) {
            if (err) console.log(err);
        });

        

    };
}
    
export { objectToCSV };