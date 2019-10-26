<template>
  <div>
    <Modal v-model="detailsIsShow" width="50%" @on-cancel="handleShow">
      <div slot="header">
        <h3>
          <Icon type="ios-create-outline" size="22" />详情内容
        </h3>
      </div>
      <div class="warp">
        <div>
          <label>项目名称：</label>
          <span>sdfvsdfvbsdf</span>
        </div>
        <div>
          <p>
            <label>Bug标题：</label>
            <span>sdvsdbfcgn</span>
          </p>
          <p>
            <label>Bug类型：</label>
            <span>sdcvsavsdsd</span>
          </p>
        </div>

        <div>
          <p>
            <label>创建者：</label>
            <span>啊是到v水电费</span>
          </p>
          <p>
            <label>创建时间：</label>
            <span>xcv xcb vcg</span>
          </p>
        </div>
        <div>
          <p>
            <label>指派给：</label>
            <span>xcv xcb vcg</span>
          </p>
          <p>
            <label>状态：</label>
            <span>xcv xcb vcg</span>
          </p>
        </div>
        <div>
          <label>附件内容：</label>
          <span>可上传文件、文本、图片等</span>
        </div>
        <div>
          <label>重现步骤：</label>
          <span>asdvsdfbdfnggf</span>
        </div>
        <div>
          <label>备注：</label>
          <span>dfbdfnggfvmfhg</span>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" @click.stop="handleShow">关闭</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // watch: {
  //   oneBugIsShow(val) {
  //     console.log(val);
  //     this.isShow = val;
  //   }
  // },
  computed: {
    detailsIsShow() {
      return this.$store.state.show.detailsIsShow;
    }
  },
  methods: {
    handleShow() {
      this.$store.commit("setDetailsIsShow", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  > div {
    padding: 10px 10px;
    display: flex;
    align-items: center;
    label {
      font-weight: 400;
    }
    > p {
      width: 50%;
    }
  
    .editor {
      width: 86%;
    }
  }
}
</style>


