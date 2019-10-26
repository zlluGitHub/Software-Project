<template>
  <div>
    <Modal v-model="oneBugIsShow" width="70%" @on-cancel="handleShow">
      <div slot="header">
        <h3><Icon type="ios-create-outline" size="22"/> 新建Bug</h3>
      </div>
      <div class="warp">
        <p>
          <label>所属项目：</label>
          <Select v-model="model1" style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <label>Bug类型：</label>
          <Select v-model="model1" style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </p>
        <p>
          <label>当前指派：</label>
          <Select v-model="model1" style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <label>优先级别：</label>
          <Select v-model="model1" style="width:300px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </p>
        <p>
          <label>Bug标题：</label>
          <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
        </p>
        <div>
          <label>上传附件：</label>
          <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">附件上传</Button>
          </Upload>
          <span>可上传文件、文本、图片等</span>
        </div>
        <div>
          <label>重现步骤：</label>
          <QuillEditor class="editor" />
        </div>
        <div>
          <label>备注：</label>
          <Input v-model="value6" type="textarea" :rows="4" placeholder="此处可以不填。" />
        </div>
      </div>
      <div slot="footer">
        <Button type="info">确定</Button>
        <Button type="primary" @click.stop="handleShow">关闭</Button>
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
    oneBugIsShow() {
      return this.$store.state.show.oneBugIsShow;
    }
  },
  // watch: {
  //   oneBugIsShow(val) {
  //     console.log(val);
  //     this.isShow = val;
  //   }
  // },
  data() {
    return {
      isShow: false,
      value: "asd",
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
      this.$store.commit("setOneBugIsShow", false);
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
    > div {
      margin-right: 40px;
    }
    .editor {
      width: 86%;
    }
  }
}
</style>


