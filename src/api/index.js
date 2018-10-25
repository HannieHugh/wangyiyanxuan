/*包含n个接口请求函数的模块*/

import ajax from './ajax'


//获取第一屏信息的接口请求函数
export const reqMsite = () => ajax('/home_data');

export const reqFoods = () => ajax('/shiwu_data');

export const reqCategorys = () => ajax('/category_data');

