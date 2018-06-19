<template>
  <div class="app_clock app_components_boxshadow">
    <div>
      <canvas id="myCanvas" width="225" height="370">抱歉，您的浏览器不支持canvas画布</canvas>
    </div>
    <div id="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>

<script>
import date from './date-style1';

export default {
  name: 'clock',
  data() {
    return {
      time: '',
      date: '',
    };
  },
  mounted() {
  /* eslint-disable */
  new date(this);
  /* eslint-disable */
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.app_clock{
  width:225px;
}
p {
  margin: 0;
  padding: 0;
}
#clock {
  font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 8px #b7b7b7;
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 18px;
}
#clock .text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>
