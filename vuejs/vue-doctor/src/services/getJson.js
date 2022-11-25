import http from '../http-common.js';
class getJson{
    load(fileName){
        return http.get(`data/${fileName}.json`)
    }
}
export default new getJson()
