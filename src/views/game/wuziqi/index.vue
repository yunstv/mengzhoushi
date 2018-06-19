<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'wuziqi',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '五子棋',
      pagessrc: 'static/pages/wuziqi/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
