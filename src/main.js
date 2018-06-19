// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * @file vue项目入口文件
 */
import Vue from 'vue';
import 'babel-polyfill';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss';
import App from './App';
import router from './router';
import store from './store';

import './plugins';
import './components';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
