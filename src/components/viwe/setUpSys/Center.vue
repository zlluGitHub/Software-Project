<template>
  <div>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <div class="warp">
            <div class="holder">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              />
              <p>Serati Ma</p>
              <p>海纳百川，有容乃大</p>
            </div>
            <div class="list-row">
              <div>
                <Icon type="ios-briefcase-outline" />
                <span>管理员</span>
              </div>
              <div>
                <Icon type="ios-git-network" />
                <span>产品预测、产品订购</span>
              </div>
              <div>
                <Icon type="ios-pin-outline" />
                <span>北京市</span>
              </div>
              <div>
                <Icon type="ios-at-outline" />
                <span>18230086651@163.com</span>
              </div>
            </div>
          </div>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow title="操作历史">
          <Table :columns="columns1" :data="data1"></Table>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>

export default {
  name: "center",
  components: {},
  data() {
    return {
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
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.warp {
  .holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
    }
    p:nth-child(2) {
      margin-bottom: 4px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
  }
  .list-row {
    > div {
      margin: 12px 0;
      i {
        margin-right: 7px;
      }
    }
  }
}
</style>
