<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'chaojimaliSSS',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '超级玛丽-高仿版',
      pagessrc: 'static/pages/chaojimalSSS/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
