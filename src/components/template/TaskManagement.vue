<template>
  <Layout>
    <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
      <Menu active-name="1-1" theme="light" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
         <i class="fa fa-bug"></i>
          <span>Bug追踪</span>
        </MenuItem>
        <MenuItem name="1-2" to="/task/test">
          <Icon type="logo-reddit" size="16" />
          <span>需求设计</span>
        </MenuItem>
        <MenuItem name="1-3">
          <Icon type="md-speedometer" size="16" />
          <span>代码管理</span>
        </MenuItem>
        <MenuItem name="1-4">
          <Icon type="md-speedometer" size="16" />
          <span>综合分析</span>
        </MenuItem>
      </Menu>
    </Sider>
    <!-- <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>-->
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