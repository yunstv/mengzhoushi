<template>
  <div class="app_sidebar_game">
    <h4>游戏列表</h4>
    <div>
      <p v-for="(item, index) in gamemap"
         :key="index"
         @click="tabclick(item.path)"
         :class="item.on && 'on'">
         {{item.name}}
      </p>
    </div>
  </div>
</template>

<script>
import gamemap from '@/common/gamelist';

export default {
  name: 'sidebar-game',
  data() {
    return {
      gamemap,
      gameactiveindex: '',
    };
  },
  watch: {
    $route() {
      this.handlegameactive();
    },
  },
  computed: {
  },
  mounted() {
    this.handlegameactive();
  },
  methods: {
    tabclick(path) {
      this.$router.push({ path });
    },
    handlegameactive() {
      const vm = this;
      const route = vm.$route;
      const rpath = route.path;
      const gamemaps = [];
      vm.gamemap.forEach((item) => {
        let booleans = false;
        if (rpath.indexOf(item.path) > -1) {
          booleans = true;
        }
        gamemaps.push(Object.assign({}, item, { on: booleans }));
      });
      vm.gamemap = gamemaps;
    },
  },
};
</script>

<style lang="scss">
</style>
