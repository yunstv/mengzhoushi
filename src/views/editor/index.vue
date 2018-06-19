<template>
  <div class="app_editor">
      <el-tabs v-model="editortype" type="border-card" @tab-click="tabclick">
          <el-tab-pane label="富文本编辑器" name="quill-editor"></el-tab-pane>
          <el-tab-pane label="markdown" name="markdown"></el-tab-pane>
      </el-tabs>
      <div class="app_editor_view">
        <router-view name="editor"/>
      </div>
      <div class="app_editor_submit">
        <button type="button" class="el-button el-button--primary">
          <i class="el-icon-zhifj"></i><span>发布</span>
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data() {
    return {
      editortype: 'quill-editor',
    };
  },
  computed: {
  },
  watch: {
    $route() {
      this.editortype = this.$route.name;
    },
    editortype() {
      if (this.editortype === 'editor') {
        this.editortype = 'quill-editor';
        this.tabclick();
      }
    },
  },
  mounted() {
    this.editortype = this.$route.name;
  },
  methods: {
    tabclick() {
      this.$router.push({ path: `/editor/${this.editortype}` });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/style/editor.scss';
.el-icon-zhifj{
  background: url(../../assets/img/zhifj.png);
  width: 20px;
  height: 20px;
  background-size: contain;
}
</style>
<style lang="scss" scoped>
.app_editor_submit{
  .el-button{
    padding: 13.5px 31px;
    border-radius: 0;
    span{
      vertical-align: text-top;
    }
  }
}
</style>
