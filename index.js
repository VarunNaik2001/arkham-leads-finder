
import axios from "axios";
import {objectToCSV} from "./fileCreator.js";


axios.defaults.headers.common['API-Key'] = 'R2dr5jjQAxHwg4LMc5RSGgfNvpN0uXGE';

/*

base: the entities to search, can be protcols or addresses on the blockchain 
flow: transactions "in" or "out" of the entity(s)
limit: how many results to return (maximum of 10000)
usdGte: filters transactions to those greater than USD value given 
timeLast: filters transactions by time, ex: 24h or 30d returns transactions that happened in the last 24 hours or 30 days respectively
sortKey: "time" "value" or "usd" to order transactions 

For complete list of parameters and parameter configurations, check the Arkham API notion page in README.md 
*/
const config = {
  method: "get",
  url: "https://api.arkhamintelligence.com/transfers",
  params: {
    base: "aave,compound,notional-finance,morpho,venus",
    flow: "in",
    limit: "9999",
    usdGte:"1000000",
    timeLast:"90d",
  },
}

axios(config).then((value) => {objectToCSV(value.data.transfers)})
    .catch((error) => {console.log(error)});

