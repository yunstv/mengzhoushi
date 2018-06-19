<template>
  <app-game-iframe :pagesname="pagesname" :pagessrc="pagessrc"></app-game-iframe>
</template>

<script>
import appGameIframe from '../components/iframes';

export default {
  name: 'fruit-ninja',
  components: {
    appGameIframe,
  },
  data() {
    return {
      pagesname: '水果忍者',
      pagessrc: 'static/pages/fruit-ninja/index.html',
    };
  },
};
</script>

<style lang="scss">
</style>
