
<template>
  <div class="main" ref="elememt">
    <Layout>
      <Header>
        <div class="menu">
          <div class="menu">
            <div class="logo">研发管理系统</div>
            <Menu mode="horizontal" :theme="theme" active-name="1">
              <MenuItem name="1" to="/">
                <Icon type="ios-paper" />工作台
              </MenuItem>
              <MenuItem name="2" to="/workbench">
                <Icon type="ios-people" />项目管理
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-people" />团队成员
              </MenuItem>
              <MenuItem name="4" to="/sif">
                <Icon type="ios-construct"/>综合设置
              </MenuItem>
              <MenuItem name="5">
                <Icon type="ios-construct" />模板组件
              </MenuItem>
            </Menu>
          </div>
          <div class="nav">
            <div class="badge">
              <Dropdown trigger="click" placement="bottom-start">
                <Badge dot>
                  <Icon type="ios-notifications-outline" size="26"></Icon>
                </Badge>
                <DropdownMenu slot="list">
                  <Tabs>
                    <TabPane label="通知（12）" icon="logo-apple">通知（12）</TabPane>
                    <TabPane label="消息（5）" icon="logo-windows">消息（5）</TabPane>
                    <TabPane label="待办（24）" icon="logo-tux">待办（24）</TabPane>
                  </Tabs>
                </DropdownMenu>
              </Dropdown>
            </div>
            <Dropdown>
              <div class="config">
                <img
                  src="https://beta.vilson.xyz/static/upload/member/avatar/20191021/75133823503a44b34269b7d4161b9078.jpg"
                  alt
                />
                <span>郑玲璐</span>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem>个人设置</DropdownItem>
                <DropdownItem>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Header>

      <router-view />

      <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: "light"
    };
  },

  computed: {},
  mounted() {}
};
</script>


<style lang="scss"  scoped>
.main {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
    //  box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
  .menu {
    display: flex;
    justify-content: space-between;
    .logo{
      color: #fff;
      font-size: 27px;
      margin-right: 45px;
    }
  }
  .ivu-menu-horizontal {
    height: inherit;
    line-height: inherit;
  }
  .ivu-menu-item-active {
    background: rgba(0, 0, 0, 0.08);
    border-bottom: 0px solid #2d8cf0 !important;
  }
  .ivu-menu-light {
    background: transparent;
     a,
    a:hover {
      color: #fff;
    }
  }
  .ivu-layout {
    height: 100%;
  }
  .content {
    padding: 18px;
    min-height: 280px;
    background: #fff;
  }
  .ivu-layout-sider,
  .content {
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  }
  .ivu-layout-header {
    background-image: linear-gradient(
      143deg,
      #e12f3f 20%,
      #f79275 81%,
      #ffc107
    );
    border-bottom: none;
  }
  .ivu-menu-dark {
    background: transparent;
  }
  .nav {
    display: flex;
    align-items: center;
    .badge {
      margin-right: 20px;
      cursor: pointer;
      .ivu-badge {
        color: #fff;
        margin: 0px 20px;
        line-height: 30px;
        margin-top: 10px;
      }
    }
    .config {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      img {
        margin-right: 6px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
  }
}
</style>