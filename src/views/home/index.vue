<template>
  <div class="home">
    <markdown-preview/>
  </div>
</template>

<script>
import markdownPreview from '../editor/markdown/preview';

export default {
  name: 'home',
  components: {
    markdownPreview,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
