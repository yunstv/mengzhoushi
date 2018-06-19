<template>
  <div class="app_game_list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="p marginT-Bmin">HTML5休闲智趣益智游戏</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="(item, index) in gamemap" :key="index">
          <div class="media" @click="tabclick(item.path)">
            <div class="media-left">
              <div class="width80">
              <img class="media-object" :src="item.imgurl" :alt="item.name">
              </div>
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{item.name}}</h4>
              <p class="marginT-Bmin">
                {{item.content}}
              </p>
              <el-button type="primary" class="app_game_button">开始</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import gamemap from '@/common/gamelist';

export default {
  name: 'game',
  data() {
    return {
      gamemap,
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    tabclick(path) {
      if (path.indexOf('static') > -1) {
        window.open(path);
      } else {
        this.$router.push({ path });
      }
    },
  },
};
</script>
<style lang="scss">
  .app_game_list{
    .el-card{
      box-shadow: 0 0 0 0 rgba(0,0,0,0);
    }
    .el-col{
      margin-bottom: 15px;
    }
    .el-card__header{
      padding: 18px 0px;
      margin: 0 18px;
    }
    .app_game_button{
      position: absolute;
      padding: 4px 25px;
      font-size: 14px;
      font-weight: normal;
      bottom: 0;
    }
    .clearfix{
      &>.p{
        font-size: 18px;
      }
    }
  }
</style>
