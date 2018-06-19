<template>
  <div class="markdown_editor height100">
     <mavon-editor v-model="centent"/>
     <span @click="handleCentent">获取</span>
  </div>
</template>

<script>
import './main';

export default {
  name: 'markdown',
  data() {
    return {
      centent: '## markdown',
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    handleCentent() {
      /* eslint-disable */
      const str = String(this.centent);
      // 转义单引号
      const reg = new RegExp('"', 'g');
      let restr = str.replace(reg, '&quot;');
      // 转义空格
      restr = restr.replace(new RegExp(' ', 'g'), '&nbsp;');
      // 转义换行
      restr = restr.replace(/\n/g, '&lt;br&gt;');
      // console.log(restr);
      /* eslint-disable */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $height100:100%;
  .markdown_editor{
    .v-note-wrapper{
      min-height: $height100;
      height: $height100;
      .v-note-op{
        border-bottom: 1px solid #e4e4e4;
      }
      .v-note-op,.v-note-panel{
        box-shadow: 0 0px 0px rgba(0,0,0,0);
      }
    }
  }
</style>
