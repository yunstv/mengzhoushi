<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'chaojimali',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '超级玛丽-精简版',
      pagessrc: 'static/pages/chaojimali/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
