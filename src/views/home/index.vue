<!--
 * @Author: Vhen
 * @Date: 2020-10-10 13:58:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 11:56:24
 * @Description: 
-->
<template>
  <div class="home">
    home   <el-button type="success">成功按钮</el-button>

  </div>
</template>

<script>
export default {
  name: 'home',
  props: {},
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted(){
  },
  watch: {}
}
</script>
<style lang='scss' scoped>
.home{
  font-size: 18px;
  color: red;
  transform: translateX(60px);
}
</style>