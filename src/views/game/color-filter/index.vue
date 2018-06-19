<template>
  <div class="height100">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/game' }">游戏列表</el-breadcrumb-item>
      <el-breadcrumb-item>color-filter</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="color-filter height100"
    :class="this.ifdmax ? 'imax' : ''">
      <i class="iFD-max"
        :class="ifdmax ? 'el-icon-zoom-out' : 'el-icon-zoom-in'"
        @click="ifdmax = !ifdmax">
      </i>
      <!---->
      <div class="grid height100">
        <div style="height: 100%; max-width: 1024px; margin: 0 auto;padding:10px 20px;">
          <div class="page hide" id="index" style="display: block;">
            <h1>测测你的眼睛对色差的辨识度</h1>
            <h1>The Color !</h1>
            <div id="help">
              找出所有色块里颜色不同的一个
              <br>Click on the tile that has a different color
            </div>
            <div class="btns">
              <el-button data-type="color" class="play-btn" type="primary" round>开始测试</el-button>
              <br>
              <div align="center">
              </div>
            </div>
          </div>
          <div class="page hide" id="room">
            <header>
              <span class="lv">
                过关：
                <em>
                  0
                </em>
              </span>
              <span class="time">
              </span>
              <span class="btn btn-pause">
                暂停
              </span>
            </header>
            <div id="box" class="lv1">
            </div>
          </div>
          <div class="page hide" id="dialog" style="position: absolute;">
            <div class="inner">
              <div class="content gameover">
                <h2 style="font-size:28px;margin:5px;">0关</h2>
                <p>
                  你眼睛色差辨识度水平：
                </p>
                <h3></h3>
                <div class="btn-wrap">
                <el-button data-type="color" class="play-btn" type="primary" round>再玩一次</el-button>
              </div>
            </div>
            <div class="content pause">
              <h3>
                游戏暂停
              </h3>
              <div class="btn-wrap">
                <button class="btn btn-resume">
                继续
                </button>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <!---->
  </div>
</template>

<script>
import main from './main';

export default {
  name: 'color-fiter',
  data() {
    return {
      ifdmax: false,
    };
  },
  computed: {
  },
  mounted() {
    main.init();
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
