<template>
  <div id="app" class="app">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-sidebar></app-sidebar>
        </el-aside>
        <el-main>
          <div class="app_components_boxshadow">
            <router-view/>
          </div>
        </el-main>
        <el-aside class="app_container_r" width="245px">
          <app-clock></app-clock>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    };
  },
  computed: {
    isloginstate() {
      return this.$store.state.isloginstate;
    },
  },
};
</script>

<style lang="scss">
</style>
