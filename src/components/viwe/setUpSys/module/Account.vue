<template>
  <div>
    <h2>账号绑定</h2>
    <div class="ivu-mt ivu-pl ivu-pr">
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>
            <span class="ivu-avatar ivu-avatar-circle ivu-avatar-image ivu-avatar-small">
              <img
                src="https://file.iviewui.com/admin-pro-dist/img/icon-social-wechat.c69ec08c.svg"
              />
            </span>
            <span>微信</span>
          </h4>
          <p>当前未绑定微信账号</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <a target="_self" class="i-link">绑定</a>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>
            <span class="ivu-avatar ivu-avatar-circle ivu-avatar-image ivu-avatar-small">
              <img src="https://file.iviewui.com/admin-pro-dist/img/icon-social-weibo.cbf658a0.svg" />
            </span>
            <span>微博</span>
          </h4>
          <p>当前未绑定微博账号</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <a target="_self" class="i-link">绑定</a>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>
            <span class="ivu-avatar ivu-avatar-circle ivu-avatar-image ivu-avatar-small">
              <img
                src="https://file.iviewui.com/admin-pro-dist/img/icon-social-facebook.e95df60e.svg"
              />
            </span>
            <span>Facebook</span>
          </h4>
          <p>当前未绑定 Facebook 账号</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <a target="_self" class="i-link">绑定</a>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>
            <span class="ivu-avatar ivu-avatar-circle ivu-avatar-image ivu-avatar-small">
              <img
                src="https://file.iviewui.com/admin-pro-dist/img/icon-social-twitter.5db80e81.svg"
              />
            </span>
            <span>Twitter</span>
          </h4>
          <p>当前未绑定 Twitter 账号</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <a target="_self" class="i-link">绑定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>

h2 {
  margin-bottom: 10px;
}
h4{
    padding: 10px 0px;
    span:nth-child(2){
        margin-left: 10px;
    }
}
</style>
