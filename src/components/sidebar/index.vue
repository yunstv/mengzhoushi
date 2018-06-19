<template>
  <div class="app_sidebar">
    <template v-if="views.index">
      <app-sidebar-index />
    </template>
    <template v-else-if="views.home">
      <app-sidebar-home />
    </template>
    <template v-else-if="views.game.show">
      <app-sidebar-game />
    </template>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  components: {
    appSidebarIndex: () => import('./components/index'),
    appSidebarHome: () => import('./components/home'),
    appSidebarGame: () => import('./components/game'),
  },
  data() {
    return {
      views: {
        index: false,
        home: false,
        photo: false,
        game: {
          path: '/game/',
          show: false,
        },
        guestbook: false,
        about: false,
        toutiao: false,
      },
    };
  },
  watch: {
    $route() {
      this.handleviews();
    },
  },
  methods: {
    handleviews() {
      const vm = this;
      const views = vm.views;
      const viewskeys = Object.keys(views);
      const route = vm.$route;
      const rname = route.name;
      const rpath = route.path;
      viewskeys.forEach((item) => {
        let booleans = false;
        const vitem = views[item];
        if (rname === item) {
          booleans = true;
        }
        if (typeof vitem === 'boolean') {
          views[item] = booleans;
        } else {
          views[item].show = rpath.indexOf(vitem.path) > -1;
        }
      });
      vm.views = views;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
