<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'xiangqi',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '中国象棋',
      pagessrc: 'static/pages/xiangqi/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
