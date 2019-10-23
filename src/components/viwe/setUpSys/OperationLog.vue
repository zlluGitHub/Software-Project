<template>
  <div>
    <!-- <Card title="导出EXCEL"> -->
    <div class="ivu-alert ivu-alert-info ivu-alert-with-icon">
      <span class="ivu-alert-icon">
        <i class="ivu-icon ivu-icon-ios-information-circle"></i>
      </span>
      <span class="ivu-alert-message">
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
        注意：非 template/render 模式下，需使用
      </span>
    </div>
    <Card shadow>
      <div class="search">
        <div class="margin-right">
          <label>起始日期：</label>
          <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        </div>
        <div class="margin-right">
          <label>终止日期：</label>
           <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        </div>
        <div class="margin-right">
          <label>操作者：</label>
          <Input v-model="value" placeholder="请输入内容..." style="width: 200px" />
        </div>
        <Button type="info" :loading="loading" @click="toLoading" class="margin-right">
          <span v-if="!loading">查询</span>
          <span v-else>Loading...</span>
        </Button>
        <Button type="success">重置</Button>
      </div>
    </Card>
    <tables
      ref="tables"
      editable
      searchable
      search-place="top"
      v-model="tableData"
      :columns="columns"
      @on-delete="handleDelete"
    />
    <!-- <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button> -->
  </div>
</template>
<script>
import Tables from "./module/LogTable";
// import { getTableData } from "@/api/data";
export default {
  name: "generate",
  components: {
    Tables
  },
  data() {
    return {
      columns: [
        { title: "Name", key: "name", sortable: true },
        { title: "Email", key: "email", editable: true },
        { title: "Create-Time", key: "createTime" },
        {
          title: "Handle",
          key: "handle",
          options: ["delete"],
          button: [
            (h, params, vm) => {
              return h(
                "Poptip",
                {
                  props: {
                    confirm: true,
                    title: "你确定要删除吗?"
                  },
                  on: {
                    "on-ok": () => {
                      vm.$emit("on-delete", params);
                      vm.$emit(
                        "input",
                        params.tableData.filter(
                          (item, index) => index !== params.row.initRowIndex
                        )
                      );
                    }
                  }
                },
                [h("Button", "自定义删除")]
              );
            }
          ]
        }
      ],
      tableData: [],
      //   图谱数据
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      },
      loading: false
    };
  },
  methods: {
    toLoading() {
      this.loading = true;
    },
    handleDelete(params) {
      console.log(params);
    },
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
.search{
  display: flex;
  justify-content: center;
  .margin-right{
    margin-right: 25px;
  }
}
</style>
