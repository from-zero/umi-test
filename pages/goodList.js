
import styles from './goodList.css';
import {useEffect} from 'react'
import {connect} from 'dva';

export default connect(
  state=>({
    goodList:state.goods,
    loading:state.loading
  }),
  {
    initGoods:title=>({type:'goods/getGoods'}),
    addGoods:title=>({type:'goods/addGoods', payload:title})
  }
)(function({goodList, initGoods, addGoods,loading}) {
  useEffect(() => {
    initGoods();
  }, [])
  console.log(loading)
  if(loading.models.goods){
    //当前模型中如果有任何异步操作都会为true
    return <div>加载中...</div>
  }
  return (
    <div className={styles.normal}>
      <h1>Page goodList</h1>
      <ul>{
        goodList.map((item,inx)=>{
          return <li key={inx}>{item.name}</li>
        })
      }</ul>
      <button onClick={()=>addGoods('商品'+new Date().getTime())}>add Goods</button>
    </div>
  )
})
