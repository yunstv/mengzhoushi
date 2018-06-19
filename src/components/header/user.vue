<template>
  <div class="app_vuser">
    <el-popover
      ref="popover"
      placement="top-start"
      trigger="hover"
      width="130"
      style="padding:0"
      popper-class="app_header_navbar_popper"
      >
        <div class="app_vuser_setting">
          <ul class="el-dropdown-menu">
            <li class="el-dropdown-menu__item">个人资料</li>
            <li class="el-dropdown-menu__item">退出账号</li>
          </ul>
        </div>
      </el-popover>
      <span class="app_header_navbar_username" v-popover:popover>
        <span class="app_header_navbar_username_img"></span>
      </span>
  </div>
</template>

<script>
import xuehua from './xuehua/index';

export default {
  name: 'users',
  data() {
    return {
      isxuehuashow: true,
      value: '关',
    };
  },
  watch: {
    isxuehuashow() {
      const isxuehuashow = this.isxuehuashow;
      if (isxuehuashow) {
        xuehua.init();
      } else {
        xuehua.remove();
      }
    },
  },
  mounted() {
    this.isxuehuashow = !this.isxuehuashow;
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-dropdown-menu{
  position: relative;
  display: block;
  width: 100%;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  border-width: 0;
  padding: 0;
  margin: 0;
  li:not(:first-child){
    border-top: 1px solid #ccc;
  }
  &__item:focus, &__item:not(.is-disabled):hover{
    background-color: transparent;
    color: #66b1ff;
  }
}
.app_header_navbar{
  .app_vuser{
    height: auto;
  }
}
</style>
