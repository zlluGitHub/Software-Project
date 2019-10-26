<template>
  <div class="content">
    <div class="left">
      <div class="chart">
        <pie />
      </div>
      <h2>时间周期</h2>
      <ul>
        <li class="active">全部默认</li>
        <li>当天任务</li>
        <li>本周任务</li>
        <li>本月任务</li>
        <li>本年任务</li>
      </ul>
    </div>
    <div class="right">
      <div class="query">
        <div class="select">
          <label>项目</label>
          <Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <label>指派</label>
          <Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList4" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <label>状态</label>
          <Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList5" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="handle">
          <div>
            <Dropdown trigger="click" style="margin-left: 20px">
              <Button type="info" ghost>
                <!-- 导出EXCEL -->
                <Icon type="ios-download-outline" size="18" />导出
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>导出EXCEL表</DropdownItem>
                <DropdownItem>导出CSV表</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div>
            <Button type="success" ghost @click.stop="setOneBugIsShow">+ 新建Bug</Button>
          </div>
        </div>
      </div>
      <div class="warp">
        <!-- 表格 -->
        <MyTable />
        <!-- 新建Bug -->
        <AddOneBug />
        <!-- 解决Bug -->
        <Solve />
        <!-- 详情 -->
        <Details />
      </div>
    </div>
  </div>
</template>

<script>
import pie from "./module/pie";
import MyTable from "./module/MyTable";
import AddOneBug from "./module/AddOneBug";
import Solve from "./module/Solve";
import Details from "./module/Details";
export default {
  name: "bug",
  components: {
    pie,
    MyTable,
    AddOneBug,
    Solve,
    Details
  },
  data() {
    return {
      cityList3: [
        {
          value: "项目1",
          label: "项目1"
        },
        {
          value: "项目2",
          label: "项目2"
        },
        {
          value: "项目3",
          label: "项目3"
        },
        {
          value: "项目4",
          label: "项目4"
        },
        {
          value: "项目5",
          label: "项目5"
        },
        {
          value: "项目6",
          label: "项目6"
        }
      ],
      cityList4: [
        {
          value: "默认全部",
          label: "默认全部"
        },
        {
          value: "指派给我",
          label: "指派给我"
        },
        {
          value: "指派他人",
          label: "指派他人"
        },
        {
          value: "由我创建",
          label: "由我创建"
        }
      ],
      cityList5: [
        {
          value: "默认全部",
          label: "默认全部"
        },
        {
          value: "待处理",
          label: "待处理"
        },
        {
          value: "待回测",
          label: "待回测"
        },
        {
          value: "未解决",
          label: "未解决"
        },
        {
          value: "已解决",
          label: "已解决"
        },
        {
          value: "已关闭",
          label: "已关闭"
        },
        {
          value: "被延期",
          label: "被延期"
        }
      ]
    };
  },
  methods: {
    setOneBugIsShow() {
      this.$store.commit("setOneBugIsShow", true);
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  .left,
  .right {
    background-color: #fff;
    border: 1px solid #eee;
  }
  .left {
    width: 15%;
    padding: 0 20px;
    margin-right: 10px;
    h2 {
      font-size: 18px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    ul {
      li {
        padding: 10px;
        cursor: pointer;
        color: #005980;
        position: relative;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .active {
    color: #fe7300 !important;
  }
  .active::after {
    position: absolute;
    display: block;
    content: "";
    top: 10px;
    right: -33px;
    width: 0;
    height: 0;
    // z-index: 100;
    border-top: 12px solid transparent;
    border-right: 12px solid #fff;
    border-bottom: 12px solid transparent;
  }
  .right {
    //  padding: 20px;
    width: 85%;
    .query {
      background: #fcfcfc;
      padding: 10px 16px;
      box-shadow: 0 1px 0 0 #e3e9ed;
      display: flex;
      justify-content: space-between;

      .select {
        display: flex;
        align-items: center;
        .ivu-select {
          margin-right: 20px;
        }
        label {
          padding: 5px 10px;
          background: #f7f9fa;
          height: 32px;
          border: 1px solid #dcdee2;
          border-right: 0px;
        }
      }
      .handle {
        display: flex;
        align-items: center;
        > div {
          margin-left: 10px;
        }
      }
    }
  }
  .warp {
    padding: 10px;
  }
}
</style>
