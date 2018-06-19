import Vue from 'vue';

export default {
  SER_ISLOGINSTATE(state, name) {
    Vue.set(state, 'isloginstate', name);
  },
};
