<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'duimutou',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '堆木头',
      pagessrc: 'static/pages/duimutou/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
