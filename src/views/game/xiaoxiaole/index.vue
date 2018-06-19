<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'xiaoxiaole',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '消消乐',
      pagessrc: 'static/pages/xiaoxiaole/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
