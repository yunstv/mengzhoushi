<template>
  <div class="app_navigation_view">
    <div v-for="(item, index) in navigationList"
      :key="index"
      @click="tabclick(item.paths, index)"
      class="pull-left node" ref="node">
      {{item.name}}
    </div>
    <i class="animation_christensen"
      :style="'width:'+w+'px;left:'+x+'px;'"></i>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      w: '0',
      x: '0',
      navigationList: [
        {
          name: '首页',
          paths: '/',
        },
        {
          name: '博文',
          paths: '/home',
        },
        {
          name: '相册',
          paths: '/photo',
        },
        {
          name: '游戏',
          paths: '/game',
        },
        {
          name: '留言板',
          paths: '/guestbook',
        },
        {
          name: '关于我',
          paths: '/about',
        },
        {
          name: '博文头条',
          paths: '/toutiao',
        },
        {
          name: '写作',
          paths: '/editor',
        },
      ],
    };
  },
  mounted() {
    this.routeindeOf();
  },
  watch: {
    $route() {
      this.routeindeOf();
    },
  },
  methods: {
    routeindeOf() {
      this.navigationList.forEach((item, index) => {
        if (this.$route.path.indexOf(item.paths) > -1) this.animation(index);
      });
    },
    animation(index) {
      let w = 0;
      let x = 0;
      this.$refs.node.forEach((item, i) => {
        const ws = item.offsetWidth;
        if (index === i) w = ws;
        if (index > i) x += ws;
      });
      this.w = w;
      this.x = x;
    },
    tabclick(path, index) {
      this.animation(index);
      if (path.indexOf('static') > -1) {
        window.open(path);
      } else {
        this.$router.push({ path });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.app_navigation_view{
  position: absolute;
  & .node{
    padding: 0px 20px;
    cursor: pointer;
  }
}
.animation_christensen{
  transition: all .3s ease;
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 70px;
  top: 0px;
  background: transparent;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: #015ed1;
  }
}
</style>
