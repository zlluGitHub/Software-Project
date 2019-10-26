<template>
  <div class="main" ref="elememt">
    <Layout>
      <Header>
        <div class="menu">
          <div class="menu">
            <div class="logo">Simple Design</div>
            <Menu mode="horizontal" :theme="theme" active-name="1">
              <MenuItem name="1" to="/">
                <Icon type="md-apps" size="16" />工作台
              </MenuItem>
              <MenuItem name="2" to="/task">
                <Icon type="ios-paper-outline" size="16" />任务管理
              </MenuItem>
              <MenuItem name="3" to="/project">
                <Icon type="ios-bookmarks-outline" size="16" />项目管理
              </MenuItem>
              <MenuItem name="4" to="/team">
                <Icon type="ios-people-outline" size="16" />团队成员
              </MenuItem>
              <MenuItem name="5" to="/file">
                <Icon type="ios-folder-outline" size="16" />文档管理
              </MenuItem>
              <MenuItem name="6" to="/sif">
                <Icon type="ios-construct-outline" size="16" />系统设置
              </MenuItem>
              <MenuItem name="7" to="/template">
                <Icon type="md-share" size="16" />模板组件
              </MenuItem>
            </Menu>
          </div>
          <div class="nav">
            <div class="badge">
              <Dropdown placement="bottom-start">
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
             <!-- <svg width="64" height="41" viewBox="0 0 64 41"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fill-rule="nonzero" stroke="#D9D9D9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#FAFAFA"></path></g></g></svg> -->
            <!-- <Dropdown>
              <div class="config">
                <img
                  src="https://beta.vilson.xyz/static/upload/member/avatar/20191021/75133823503a44b34269b7d4161b9078.jpg"
                />
                <span>系统切换</span>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>权限管理</DropdownItem>
                <DropdownItem>文档管理</DropdownItem>
                <DropdownItem>用户管理</DropdownItem>
                <DropdownItem>存储管理</DropdownItem>
              </DropdownMenu>
            </Dropdown>-->
            <!-- <Dropdown>
              <div class="config">
                <img src="https://beta.vilson.xyz/static/upload/member/avatar/20191021/75133823503a44b34269b7d4161b9078.jpg"/>
                <span>系统切换</span>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>权限管理</DropdownItem>
                <DropdownItem>文档管理</DropdownItem>
                <DropdownItem>用户管理</DropdownItem>
                <DropdownItem>存储管理</DropdownItem>
              </DropdownMenu>
            </Dropdown>-->

            <Dropdown>
              <div class="add config">
                <Icon type="md-add" size="25" />新建
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <Icon type="ios-contact-outline" size="16" />新建任务
                </DropdownItem>
                <DropdownItem>
                  <Icon type="ios-swap" size="16" />写周报
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <div class="config">
                <img
                  src="https://beta.vilson.xyz/static/upload/member/avatar/20191021/75133823503a44b34269b7d4161b9078.jpg"
                />
                <span>郑玲璐</span>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <Icon type="ios-contact-outline" size="16" />个人中心
                </DropdownItem>
                <DropdownItem>
                  <Icon type="ios-swap" size="16" />切换主题
                </DropdownItem>
                <DropdownItem>
                  <Icon type="ios-help-circle-outline" size="16" />帮助
                </DropdownItem>
                <DropdownItem>
                  <Icon type="ios-information-circle-outline" size="16" />提 Issue
                </DropdownItem>
                <DropdownItem>
                  <Icon type="ios-log-out" size="16" />退出登录
                </DropdownItem>
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
  //box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
  .ivu-dropdown-menu {
    i {
      margin-right: 5px;
    }
    > li:nth-child(5),
    li:nth-child(3) {
      border-top: 1px solid #eee;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    .logo {
      color: #fff;
      font-size: 27px;
      margin-right: 25px;
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
    .add {
      margin-right: 30px;
    }
  }
}
</style>