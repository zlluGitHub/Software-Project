<template>
  <div>
    <div class="ivu-card-head title">
      <h3>数据列表</h3>
      <Button icon="md-download" :loading="exportLoading" @click="exportExcel">导出数据</Button>
    </div>
    <Card shadow>
      <Table border :columns="tableTitle" :data="tableData"></Table>
      <div class="page">
        <Page :total="100" show-sizer />
      </div>
    </Card>
  </div>
</template>
<script>
// import excel from "@/libs/excel";
export default {
  name: "export-excel",
  data() {
    return {
      exportLoading: false,
      tableTitle: [
        {
          title: "操作者",
          key: "category1"
        },
        {
          title: "登录时间",
          key: "category2"
        },
        {
          title: "IP地址",
          key: "category3"
        },
        {
          title: "操作行为",
          key: "category4",
          // sortable: true
        },
        {
          title: "操作内容",
          key: "category5",
          // sortable: true
        }
      ],
      tableData: [
        {
          category1: '张三',
          category2: '2019-10-13',
          category3: '无',
          category4: '生成策略',
          category5:'根据上期指标生成策略对应策略',
        },
        {
           category1: '李四',
         category2: '2019-10-13',
          category3: '无',
          category4:  '策略制定',
          category5: '更新策略制定',
        },
        {
            category1: '赵六',
          category2: '2019-10-13',
          category3: '无',
          category4:  '策略制定',
          category5:  '策划策略制定',
        }
      ]
    };
  },
  methods: {
    exportExcel() {
      if (this.tableData.length) {
        this.exportLoading = true;
        const params = {
          title: ["一级分类", "二级分类", "三级分类"],
          key: ["category1", "category2", "category3"],
          data: this.tableData,
          autoWidth: true,
          filename: "分类列表"
        };
        excel.export_array_to_excel(params);
        this.exportLoading = false;
      } else {
        this.$Message.info("表格数据不能为空！");
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.page {
  margin-top: 20px;
  padding-top: 25px;
  border-top: 1px solid #e8eaec;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.margin-top-8 {
  margin-top: 8px;
}
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-20 {
  margin-top: 20px;
}
.margin-left-10 {
  margin-left: 10px;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.margin-bottom-100 {
  margin-bottom: 100px;
}
.margin-right-10 {
  margin-right: 10px;
}
.padding-left-6 {
  padding-left: 6px;
}
.padding-left-8 {
  padding-left: 5px;
}
.padding-left-10 {
  padding-left: 10px;
}
.padding-left-20 {
  padding-left: 20px;
}
.height-100 {
  height: 100%;
}
.height-120px {
  height: 100px;
}
.height-200px {
  height: 200px;
}
.height-492px {
  height: 492px;
}
.height-460px {
  height: 460px;
}
.line-gray {
  height: 0;
  border-bottom: 2px solid #dcdcdc;
}
.notwrap {
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.padding-left-5 {
  padding-left: 10px;
}
[v-cloak] {
  display: none;
}
</style>