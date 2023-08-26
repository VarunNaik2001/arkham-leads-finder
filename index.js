
const { default: axios } = require("axios");
import objectToCSVRow from "./fileCreator";


axios.defaults.headers.common['API-Key'] = 'R2dr5jjQAxHwg4LMc5RSGgfNvpN0uXGE';

/*
for complete list of parameters and parameter configurations, check the Arkham API notion page in README.md 
*/

axios({
    method: "get",
    url: "https://api.arkhamintelligence.com/transfers",
    params: {
      base: "aave",
      flow: "in",
      limit: "3",
      usdGte:"1000000",

    },
  }).then((value)=>{console.log(value.data.transfers)});

