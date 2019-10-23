<template>
  <div>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow title="个人设置">
          <ul class="ul-warp">
            <li
              class="ivu-cell"
              @click="handleSelect(1)"
              :class="[mark ===1?'ivu-cell-selected':'']"
            >
              <div class="ivu-cell-title">基本设置</div>
              <p class="ivu-cell-label">个人账户信息设置</p>
            </li>
            <li
              class="ivu-cell"
              @click="handleSelect(2)"
              :class="[mark ===2?'ivu-cell-selected':'']"
            >
              <div class="ivu-cell-title">安全设置</div>
              <p class="ivu-cell-label">密码、邮箱等设置</p>
            </li>
            <li
              class="ivu-cell"
              @click="handleSelect(3)"
              :class="[mark ===3?'ivu-cell-selected':'']"
            >
              <div class="ivu-cell-title">账号绑定</div>
              <p class="ivu-cell-label">绑定第三方社交账户</p>
            </li>
            <li
              class="ivu-cell"
              @click="handleSelect(4)"
              :class="[mark ===4?'ivu-cell-selected':'']"
            >
              <div class="ivu-cell-title">新消息通知</div>
              <p class="ivu-cell-label">各种通知的设置</p>
            </li>
          </ul>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <Basic v-if="mark===1" />
          <Security v-if="mark===2" />
          <Account v-if="mark===3" />
          <News v-if="mark===4" />
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Basic from "./module/Basic";
import Security from "./module/Security";
import Account from "./module/Account";
import News from "./module/News";
export default {
  name: "set",
  components: { Basic, Security, Account, News },
  data() {
    return {
      mark: 1,
      columns1: [
        {
          title: "登录设备",
          key: "key1"
        },
        {
          title: "登录时间",
          key: "key2"
        },
        {
          title: "IP地址",
          key: "key3"
        },
        {
          title: "操作行为",
          key: "key4"
        },
        {
          title: "操作内容",
          key: "key5"
        }
      ],
      data1: [
        {
          key1: "John Brown",
          key2: 18,
          key3: "New York No. 1 Lake Park",
          key4: "2016-10-03",
          key5: "sdfvd"
        },
        {
          key1: "Jim Green",
          key2: 24,
          key3: "London No. 1 Lake Park",
          key4: "2016-10-03",
          key5: "sdfvd"
        },
        {
          key1: "Joe Black",
          key2: 30,
          key3: "Sydney No. 1 Lake Park",
          key4: "2016-10-03",
          key5: "sdfvd"
        },
        {
          key1: "Jon Snow",
          key2: 26,
          key3: "Ottawa No. 2 Lake Park",
          key4: "2016-10-03",
          key5: "sdfvd"
        }
      ]
    };
  },
  methods: {
    handleSelect(val) {
      this.mark = val;
    }
  },
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
