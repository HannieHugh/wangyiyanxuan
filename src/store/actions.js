/*包含n个用于间接更新状态数据的方法的对象*/

import {
  reqMsite,
  reqFoods,
  reqCategorys

} from '../api'

import {
  RECEIVEMSITE,
  RECEIVEFOODS,
  RECEIVECATEGORYS
} from './mutation_type'

export default {
  //异步获取第一屏信息
  async getMsite({commit},cb){
    const result = await reqMsite();
    if(result.code===0){
      const msiteMsg = result.data;
      commit(RECEIVEMSITE,{msiteMsg});
      typeof cb==='function' && cb()
    }
  },
  //获取食物信息
  async getFoods({commit},cb){
    const result = await reqFoods();
    if(result.code===0){
      const foods = result.data;
      commit(RECEIVEFOODS,{foods})
      //该回调函数是跟新状态之后立即调用
      typeof cb==='function' && cb()
    }
  },
  //获取分类信息
  async getCategorys({commit},cb){
    const result = await reqCategorys();
    if(result.code===0){
      const categorys = result.data;
      commit(RECEIVECATEGORYS,{categorys})
      //该回调函数是更新状态之后立即调用
      typeof cb==='function' && cb()
    }
  },
}
