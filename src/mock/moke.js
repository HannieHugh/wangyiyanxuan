import Mock from 'mockjs'

import msite_data from './msite_data.json'
import goods_data from './goods_data.json'
import category_data from './category_data.json'

/*mock模拟nicegoods请求数据接口*/
Mock.mock('/nicegoods',{code:0,data:msite_data.cateList})
/*新品首发*/
Mock.mock('/newitemlist',{code:0,data:msite_data.newItemList})
/*网易自营品牌*/
Mock.mock('/nicegoods',{code:0,data:msite_data.policyDescList})
/*人气推荐，好物精选*/
Mock.mock('/nicegoods',{code:0,data:msite_data.popularItemList})
/*专题精选*/
Mock.mock('/nicegoods',{code:0,data:msite_data.topicList})
/*品牌制造商直供*/
Mock.mock('/nicegoods',{code:0,data:msite_data.tagList})
