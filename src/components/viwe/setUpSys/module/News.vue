<template>
  <div>
    <h2>新消息通知</h2>
    <div class="ivu-mt ivu-pl ivu-pr">
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>陌生人私信</h4>
          <p>未关注的人向您发私信时的通知</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <span tabindex="0" class="ivu-switch ivu-switch-checked ivu-switch-default">
            <input type="hidden" value="true" />
            <span class="ivu-switch-inner">
              <span>开</span>
              <!---->
            </span>
          </span>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>邀请/评论消息</h4>
          <p>有人对我发出邀请时，我会收到消息通知</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <span tabindex="0" class="ivu-switch ivu-switch-default">
            <input type="hidden" value="false" />
            <span class="ivu-switch-inner">
              <!---->
              <span>关</span>
            </span>
          </span>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>赞同/赞赏消息设置</h4>
          <p>有人对我赞同或赞赏时，我会收到消息通知</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <span tabindex="0" class="ivu-switch ivu-switch-checked ivu-switch-default">
            <input type="hidden" value="true" />
            <span class="ivu-switch-inner">
              <span>开</span>
              <!---->
            </span>
          </span>
        </div>
      </div>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-default">
        <!---->
      </div>
      <div class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
        <div class="ivu-col ivu-col-span-22">
          <h4>邮件设置</h4>
          <p>重要事件发生时，我将会收到邮件提醒</p>
        </div>
        <div class="ivu-text-right ivu-col ivu-col-span-2">
          <span tabindex="0" class="ivu-switch ivu-switch-checked ivu-switch-default">
            <input type="hidden" value="true" />
            <span class="ivu-switch-inner">
              <span>开</span>
              <!---->
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
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
</style>
