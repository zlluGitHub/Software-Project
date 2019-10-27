<template>
    <Modal v-model="isShow" width="26%" @on-cancel="handleShow">
      <p slot="header">
        <span>文件重命名</span>
      </p>
      <div style="margin:10px;">
        <p style="margin-bottom:10px;">请输入文件名称：</p>
        <p>
          <Input v-model="value" placeholder="请输入文件名称..." style="width: 300px" />
        </p>
      </div>
      <div slot="footer">
        <Button type="info">确定</Button>
        <Button type="primary" @click.stop="handleShow">取消</Button>
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
      return this.$store.state.show.fileRenameIsShow;
    }
  },
  methods: {
    handleShow() {
      this.$store.commit("setFileRenameIsShow", false);
    }
  }
};
</script>


