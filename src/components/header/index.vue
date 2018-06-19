<template>
  <div class="app_header">
    <div class="app_header_brand">
      <div class="pull-left app_logo">
        <span class="app_brand">梦周十</span>
        <p>迷离在宇宙中的尘埃</p>
      </div>
      <div class="pull-left app_navigation">
        <app-header-navigation />
      </div>
    </div>
    <div class="app_header_navbar">
      <app-header-user/>
    </div>
  </div>
</template>

<script>
import appHeaderUser from './user';
import appHeaderNavigation from './navigation';

export default {
  components: {
    appHeaderUser,
    appHeaderNavigation,
  },
  name: 'headers',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/style/variables.scss";
  .app{
    &_logo{
      background: linear-gradient(top, #015ed1 0%, #4592f0 100%);
      background: gradient(linear,
      left top,
      left bottom,
      color-stop(0%,#015ed1),
      color-stop(100%,#4592f0));
      padding: 0px 5px 5px;
      text-align: center;
      box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
    }
    &_header{
      display:flex;
      padding:0 40px;
      justify-content: space-between;
      align-items: center;
      background-color: $color-primary;
      color: #fff;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      margin: 0 -20px;
      &, & div{
        height:60px;
      }
      &_brand{
        line-height: 60px;
        &>div{
          display: inline-block;
        }
        & p{
        line-height: 1;
        font-size: 12px;
        margin: 0;
        margin-top: -16px;
        text-align: center;
        color: #9cbfec;
        }
      }
    }
    &_navigation{
      margin-left: 120px;
    }
  }
  .app_brand{
    font-size: 32px;
    text-shadow: 1px 1px 10px #ffffff;
  }
</style>
