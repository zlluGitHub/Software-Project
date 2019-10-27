<template>
  <Layout>
    <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
      <Menu active-name="1-1" theme="light" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
        <i class="fa fa-clipboard"></i>
          <span>项目文档</span>
        </MenuItem>
        <MenuItem name="1-2">
       <i class="fa fa-folder-open"></i>
          <span>开发文档</span>
        </MenuItem>
        <MenuItem name="1-3">
         <i class="fa fa-user-secret"></i>
          <span>我创建的</span>
        </MenuItem>
        <MenuItem name="1-4">
        <i class="fa fa-star-o"></i>
          <span>我的收藏</span>
        </MenuItem>
        <MenuItem name="1-5">
         <i class="fa fa-file-archive-o"></i>
          <span>我的 Wiki</span>
        </MenuItem>
        <MenuItem name="1-6">
         <i class="fa fa-clock-o"></i>
          <span>最近编辑</span>
        </MenuItem>
        <MenuItem name="1-7">
         <i class="fa fa-shopping-basket"></i>
          <span>回收站</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <div style="overflow-x:hidden;padding:10px 15px;">
        <router-view />
      </div>
    </Layout>
  </Layout>

  <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
</template>
<script>
export default {
  data() {
    return {
      height: 500,
      isCollapsed: false
    };
  },

  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  mounted() {}
};
</script>


<style lang="scss"  scoped>


</style>