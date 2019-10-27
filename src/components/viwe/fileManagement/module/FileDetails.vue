<template>
  <Modal v-model="isShow" width="26%" @on-cancel="handleShow">
    <div slot="header">
      <h3>
        <Icon type="ios-create-outline" size="22" />xxx文件详情
      </h3>
    </div>
    <div class="warp">
      <p>
        <label>文件名称：</label>
        <span>sdfvsdfvbsdf</span>
      </p>
      <p>
        <label>文件类型：</label>
        <span>sdvsdbfcgn</span>
      </p>
      <p>
        <label>文件属性：</label>
        <span>撒旦vasd发v水电费</span>
      </p>
      <p>
        <label>创建人：</label>
        <span>sdcvsavsdsd</span>
      </p>

      <p>
        <label>创建时间：</label>
        <span>xcv xcb vcg</span>
      </p>
      <p>
        <label>最后更新时间：</label>
        <span>xcv xcb vcg</span>
      </p>
    </div>
    <div slot="footer">
      <Button type="primary" @click.stop="handleShow">关闭</Button>
    </div>
  </Modal>
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
    isShow() {
      return this.$store.state.show.fileDetailsIsShow;
    }
  },
  methods: {
    handleShow() {
      this.$store.commit("setFileDetailsIsShow", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  p {
    margin: 10px 0px;
  }
}
</style>


