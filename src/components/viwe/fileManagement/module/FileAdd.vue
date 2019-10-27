<template>
  <Modal v-model="isShow" width="32%" @on-cancel="handleShow">
    <div slot="header">
      <h3>
        <Icon type="ios-create-outline" size="22" />xxx文件详情
      </h3>
    </div>
    <div class="warp">
      <div>
        <label>文档名称：</label>
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </div>
      <div>
        <label>文档路径：</label>
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </div>
      <div>
        <label>所属文件夹：</label>
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </div>
      <div>
        <label>权限设置：</label>
        <RadioGroup v-model="animal">
          <Radio label="私有"></Radio>
          <Radio label="公开"></Radio>
        </RadioGroup>
      </div>
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
    return {
      animal: "公开"
    };
  },
  // watch: {
  //   oneBugIsShow(val) {
  //     console.log(val);
  //     this.isShow = val;
  //   }
  // },
  computed: {
    isShow() {
      return this.$store.state.show.fileAddIsShow;
    }
  },
  methods: {
    handleShow() {
      this.$store.commit("setFileAddIsShow", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
 
 >div {
   display: flex;
   align-items: center;
    margin: 20px 0px;
    >label{
      text-align: right;
      width:90px;
    }
  }
}
</style>


