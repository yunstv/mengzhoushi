<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'tanqiu',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '弹球',
      pagessrc: 'static/pages/tanqiu/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
