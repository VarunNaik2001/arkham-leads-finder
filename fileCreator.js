

var objectToCSVRow = function(dataObject) {
    var dataArray = new Array;
    for (var o in dataObject) {
        var innerValue = dataObject[o]===null?'':dataObject[o].toString();
        var result = innerValue.replace(/"/g, '""');
        result = '"' + result + '"';
        dataArray.push(result);
    }
    return dataArray.join(' ') + '\r\n';
}

var arrayOfObjectsToCSV = function(objectArray){
    var array 
}
    
module.exports = objectToCSVRow;