<template>
  <div class="markdown_editor_preview height100">
     <mavon-editor
      v-model="centent"
      :toolbars="{}"
      :editable="false"
      :subfield="false"
      :default_open="'preview'"/>
  </div>
</template>

<script>
import './main';
import jsons from './data';

export default {
  name: 'markdown',
  data() {
    return {
      centent: '',
    };
  },
  computed: {
  },
  mounted() {
    /* eslint-disable */
    const str = String(jsons.centent);
    // 转义单引号
    const reg = new RegExp('&quot;', 'g');
    let restr;
    restr = str.replace(reg, '"');
    // 转义空格
    restr = restr.replace(new RegExp('&nbsp;', 'g'), ' ');
    // 转义换行
    restr = restr.replace(/&lt;br&gt;/g, '\n');
    this.centent = restr;
    /* eslint-disable */
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $height100:100%;
  .markdown_editor_preview{
    .v-note-wrapper{
      min-height: $height100;
      height: $height100;
      .v-note-op{
        border-bottom: 1px solid #e4e4e4;
        display: none;
      }
      .v-note-op,.v-note-panel{
        box-shadow: 0 0px 0px rgba(0,0,0,0);
      }
    }
  }
</style>
