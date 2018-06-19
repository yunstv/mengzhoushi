<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'flappy',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '飞一飞',
      pagessrc: 'static/pages/flappy/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
