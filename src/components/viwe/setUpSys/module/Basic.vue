<template>
  <div>
    <h2>基本设置</h2>
    <div class="set-warp">
      <div>
        <div class="ivu-form-item ivu-form-item-required">
          <label class="ivu-form-item-label">昵称</label>
          <div class="ivu-form-item-content">
            <div class="ivu-input-wrapper">
              <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
            </div>
          </div>
        </div>
        <div class="ivu-form-item ivu-form-item-required">
          <label class="ivu-form-item-label">邮箱</label>
          <div class="ivu-form-item-content">
            <div class="ivu-input-wrapper">
              <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
            </div>
          </div>
        </div>
        <div class="ivu-form-item ivu-form-item-required">
          <label class="ivu-form-item-label">个人介绍</label>
          <div class="ivu-form-item-content">
            <div class="ivu-input-wrapper">
              <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
            </div>
          </div>
        </div>
        <div class="ivu-form-item ivu-form-item-required">
          <label class="ivu-form-item-label">居住地</label>
          <div class="ivu-form-item-content">
            <div class="ivu-input-wrapper">
              <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
            </div>
          </div>
        </div>
        <Button type="primary">更新基本信息</Button>
      </div>
      <div>
        <div class="ivu-form-item touxiang">
          <label class="ivu-form-item-label">头像</label>
          <div class="ivu-form-item-content">
            <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" />
            <div class="ivu-mt ivu-mb ivu-upload">
              <div class="ivu-upload ivu-upload-select">
                <input type="file" class="ivu-upload-input" />
                <button type="button" class="ivu-btn ivu-btn-default">
                  <i class="ivu-icon ivu-icon-md-camera"></i>
                  <span>修改头像</span>
                </button>
              </div>
              <ul class="ivu-upload-list"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basic",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.set-warp {
  display: flex;
  > div {
    flex-grow: 1;
    padding-bottom: 20px;
  }
  > div:nth-child(1) {
    margin-right: 50px;
  }
}
.touxiang {
  label {
    display: block;
    margin-bottom: 8px;
  }
}
h2 {
  margin-bottom: 10px;
}
img {
  border-radius: 5px;
  width: 150px;
  height: 150px;
}
</style>
