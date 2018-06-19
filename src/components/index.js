import Vue from 'vue';
import Header from './header';
import Sidebar from './sidebar';
import Clock from './clock';

// 公共组件
Vue.component('app-header', Header);
Vue.component('app-sidebar', Sidebar);
Vue.component('app-clock', Clock);
