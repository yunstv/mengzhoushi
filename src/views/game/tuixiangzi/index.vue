<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'tuixiangzi',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '坦克大战',
      pagessrc: 'static/pages/tuixiangzi/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
