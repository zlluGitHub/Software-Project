<template>
  <div>
    <!-- 确认框 -->
    <Modal v-model="solveBugIsShow" width="360" :closable="false" @on-cancel="handleShow">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="md-help-circle" size="20" />
        <!-- <Icon type="ios-help-circle-outline"  size="20"/> -->
        <!-- <Icon type="ios-checkmark-circle" size="20"></Icon> -->
        <span>回测确认提示</span>
      </p>
      <div style="text-align:center">
        <p>若（此问题）已解决请点击确认按钮通知（此问题的新建者）进行回测，是否继续？</p>
      </div>
      <div slot="footer">
        <Button type="primary" ghost @click.stop="handleShow">确认</Button>
        <Button type="info" ghost @click.stop="handleAssignShow">指派</Button>
        <Button type="success" ghost @click.stop="handleShow">关闭</Button>
      </div>
    </Modal>

    <!-- 指派框 -->
    <Modal v-model="assign" width="60%" @on-cancel="handleShow">
      <div slot="header">
        <h3>
          <Icon type="md-checkbox-outline" size="22" />指派提交
        </h3>
      </div>
      <div class="warp">
        <p>
          <label>所属项目：</label>
          <span>项目1</span>
        </p>
        <p>
          <label>Bug标题：</label>
          <span>Bug标题1</span>
        </p>
        <p>
          <label>Bug类型：</label>
          <span>Bug类型1</span>
        </p>
        <p>
          <label>指派给：</label>
          <Select v-model="model1" style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </p>
        <p>
          <label>抄送给：</label>
          <Select v-model="model12" filterable multiple>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </p>

        <div>
          <label>批注/备注：</label>
          <QuillEditor class="editor" />
        </div>
      </div>
      <div slot="footer">
        <Button type="info">确定</Button>
        <Button type="primary" @click.stop="handleAssignShow">关闭</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import QuillEditor from "../../../public/QuillEditor";
export default {
  components: {
    QuillEditor
  },
  computed: {
    solveBugIsShow() {
      return this.$store.state.show.solveBugIsShow;
    }
  },
  // watch: {
  //   solveBugIsShow(val) {
  //     console.log(val);
  //     this.isShow = val;
  //   }
  // },
  data() {
    return {
      assign: false,
      cityList: [
        {
          value: "代码错误",
          label: "配置相关"
        },
        {
          value: "配置相关",
          label: "配置相关"
        },
        {
          value: "代码改进",
          label: "代码改进"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      model1: ""
    };
  },
  methods: {
    handleShow() {
      this.$store.commit("setSolveBugIsShow", false);
    },
    // 指派
    handleAssignShow() {
      this.handleShow();
      this.assign = !this.assign;
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  p,
  > div {
    padding: 10px 10px;
    display: flex;
    align-items: center;
    label {
      width: 75px;
    }
    > div,
    span {
      margin-right: 40px;
    }
    .editor {
      width: 86%;
    }
  }
}
</style>


