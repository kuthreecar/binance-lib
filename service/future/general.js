
import const from './const'
import axios from 'axios'

async function testConnectivity() {
    try {
        const response = await axios.get(`${host}/fapi/v1/ping`);
        const { status, data } = response
        if (status == 200){
          return data;
        }
    } catch (error) {
        throw error;
    }
}

async function checkServerTime() {
    try {
        const response = await axios.get(`${host}/fapi/v1/time`);
        const { status, data } = response
        if (status == 200){
          return data;
        }
    } catch (error) {
        throw error;
    }
}

export default {
  testConnectivity,
  checkServerTime
}