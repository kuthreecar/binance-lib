import const from './const'
import axios from 'axios'

async function getKlineData(symbol, interval) {
    try {
        const response = await axios.get(`${const.hostname}/fapi/v1/klines`,{
      params: {
        symbol,
        interval
      }
    });
        const { status, data } = response
        if (status == 200){
          return data;
        }
    } catch (error) {
        throw error;
    }
}

async function getMarkPrice() {
    try {
        const response = await axios.get(`${const.hostname}/fapi/v1/premiumIndex`);
        const { status, data } = response
        if (status == 200){
          return data;
        }
    } catch (error) {
        throw error;
    }
}
export default {
  getKlineData,
  getMarkPrice
}