/**
 * @file 加密过的uuidrouter（方便页面组件内部调用）
 */

import routerlist from '@/common/routerlist';

routerlist.install = (Vue) => {
  Vue.prototype.$routerlist = routerlist
};

export default routerlist;
