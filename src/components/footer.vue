<template>
  <div id="tabbar">
    <div class="page-tabbar">
      <mt-tabbar
        v-model="selected"
        fixed
      >
        <mt-tab-item id="main">
          <span class="iconfont icon-home"></span>
          <span class="tabbar-name">首页</span>
        </mt-tab-item>
        <mt-tab-item id="search">
          <span class="iconfont icon-home"></span>
          <span class="tabbar-name">搜索</span>
        </mt-tab-item>
        <mt-tab-item id="message">
          <span class="iconfont icon-home"></span>
          <span class="tabbar-name">消息</span>
        </mt-tab-item>
        <mt-tab-item id="personal">
          <span class="iconfont icon-home"></span>
          <span class="tabbar-name">我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  components: {},
  data() {
    return {
      selected: 'main'
    };
  },
  watch: {
    selected: function(val) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "main":
          this.$router.push({
            path:'main'
          });
          break;
        case "search":
          this.$router.push({
            path:'search'
          });
          break;
        case "message":
          this.$router.push({
            path:'message'
          });
          break;
        case "personal":
          this.$router.push({
             path:'personal'
          });
          break;
      }
    }
  },
};
</script>
<style  scoped>
.is-selected{
    background: #fafafa;
}
.iconfont {
    color: #259af8;
}
.tabbar-name{
    color: #259af8;
    font-size:16px;
}
.mint-tab-item{
  padding:18px 0;
}
</style>