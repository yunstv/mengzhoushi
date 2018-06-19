<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'tetris',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '俄罗斯方块',
      pagessrc: 'static/pages/tetris/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
