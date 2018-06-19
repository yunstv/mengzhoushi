<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'ganji-qi',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '赣极方棋',
      pagessrc: 'static/pages/ganji-qi/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
