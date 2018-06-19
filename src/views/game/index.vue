<template>
  <div class="app_game height100">
      <app-game-list v-if="isgamelist"></app-game-list>
      <div class="app_game_view" :class="!isgamelist && 'height100'">
        <router-view name="game"/>
      </div>
  </div>
</template>

<script>
import appGameList from './components/list';

export default {
  name: 'game',
  components: {
    appGameList,
  },
  data() {
    return {
      isgamelist: false,
    };
  },
  computed: {
  },
  watch: {
    $route() {
      this.isgamelisthandle();
    },
  },
  mounted() {
    this.isgamelisthandle();
  },
  methods: {
    isgamelisthandle() {
      this.isgamelist = this.$route.name === 'game';
    },
  },
};
</script>
<style lang="scss">
  .app_game{
    .el-breadcrumb{
      padding: 15px;
    }
    .app_game_view{
      position: relative;
    }
  }
</style>
