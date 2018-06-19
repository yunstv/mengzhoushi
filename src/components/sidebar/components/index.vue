<template>
  <div class="app_sidebar_index">
    <div class="g">
      <p>作者</p>
      <div>
        前端工程师，喜欢旅游，去过杭州、上海，梦想与心爱的人一起走天涯.目前工作地点在上海.
      </div>
    </div>
    <div class="x">
      <p>
        文章列表
      </p>
      <p>
        标签
      </p>
      <p>
        归档
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-index',
  data() {
    return {
      datas: [],
      count: 1,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
  .app_sidebar_index{
    >div{
      padding: 0 10px;
    }
    div.g{
      p{
        margin:0;
        border-bottom: 1px solid #ccc;
        text-align: center;
        padding-bottom: 10px;
      }
      div{
        padding:10px 0;
        line-height: 1.2;
      }
      *{
        color: #757575;
      }
    }
    div.x{
      margin-top: 10px;
      background: #fff;
      padding-top: 8px;
      padding-bottom: 8px;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      p{
        margin: 0;
        padding: 10px 0;
        cursor: pointer;
      }
    }
  }
</style>
