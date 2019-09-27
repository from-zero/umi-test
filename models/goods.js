import {getGoodsData} from '../service/goods'

export default{
    namespace:'goods',
    state:[{name:'111'},{name:'222'}],
    reducers:{
        init(state, action){
            return [...state, ...action.payload]
        },
        addGoods(state, action){
            return [...state, {name:action.payload}]
        }
    },
    effects:{
        *getGoods(action, {call, put}){
            const res = yield call(getGoodsData)
            console.log(res)
            yield put({type:'init', payload:res.data.result})
        }
    }
}