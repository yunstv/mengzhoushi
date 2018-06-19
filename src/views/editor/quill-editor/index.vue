<template>
  <div class="quill_editor height100">
      <quill-editor v-model="content"
        ref="quilleditors"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
      </quill-editor>
  </div>
</template>

<script>
import './main';

export default {
  name: 'quilleditor',
  data() {
    return {
      editorOption: {
      },
      content: '<h1>quill-editor</h1>',
    };
  },
  computed: {
    editor() {
      return this.$refs.quilleditors;
    },
  },
  mounted() {
  },
  methods: {
    onEditorBlur() {
    },
    onEditorFocus() {
    },
    onEditorReady() {
    },
    onEditorChange() {
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.quill_editor{
  border-bottom: 0;
  .quill-editor{
    height: 100%;
    overflow: hidden;
  }
  .ql-container.ql-snow{
    border-width: 0;
    overflow-y: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 65px;
    height: auto;
  }
  .ql-toolbar.ql-snow {
    border-width: 0 0 1px 0;
    border-color: #e4e4e4;
  }
  .ql-editor{
    padding: 8px 25px 15px 25px;
    overflow-y: auto;
  }
}
</style>
