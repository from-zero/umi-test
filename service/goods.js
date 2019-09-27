import axios from 'axios';

//serivce目录下存放ajax请求的具体方法
export function getGoodsData(){
    return axios.get('/api/goods');
}