/*包含n个用于直接更新状态数据的方法的对象*/
import {
  RECEIVEFOODS,
  RECEIVEMSITE,
  RECEIVECATEGORYS

} from './mutation_type'

export default {
  [RECEIVEMSITE](state,{msiteMsg}){
    state.msiteMsg = msiteMsg
  },
  [RECEIVEFOODS](state,{foods}){
    state.foods = foods
  },
  [RECEIVECATEGORYS](state,{categorys}){
    state.categorys = categorys
  }
}
