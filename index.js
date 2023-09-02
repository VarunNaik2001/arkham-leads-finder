
import axios from "axios";
import {objectToCSV} from "./fileCreator.js";


axios.defaults.headers.common['API-Key'] = 'R2dr5jjQAxHwg4LMc5RSGgfNvpN0uXGE';

/*

base: the entities to search 
flow: transactions "in" or "out" of the entity
limit: how many results to return 
usdGte: USD value filter for transactions
timeGte: UNIX filter for transactions
sortKey: "time" "value" or "usd" to order transactions 

For complete list of parameters and parameter configurations, check the Arkham API notion page in README.md 
*/

axios({
    method: "get",
    url: "https://api.arkhamintelligence.com/transfers",
    params: {
      base: "aave,compound,notional-finance,morpho,venus",
      flow: "in",
      limit: "1",
      usdGte:"1000000",
      timeGte:"1684832820",
      sortKey:"usd",
    },
  }).then((value)=>{objectToCSV(value.data.transfers)}).catch(error => console.log(error));

