<template>
  <div class="height100">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/game' }">游戏列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{pagesname}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="xiaoxiaole height100"
    :class="this.ifdmax ? 'imax' : ''">
      <i class="iFD-max"
        :class="ifdmax ? 'el-icon-zoom-out' : 'el-icon-zoom-in'"
        @click="ifdmax = !ifdmax">
      </i>
      <!---->
      <iframe frameborder="0"
        scrolling="no"
        :src="pagessrc"
        width="100%"
        height="100%"></iframe>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: 'iframes',
  props: {
    pagessrc: {
      type: String,
      default: '',
      required: true,
    },
    pagesname: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      ifdmax: false,
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="scss">
</style>
