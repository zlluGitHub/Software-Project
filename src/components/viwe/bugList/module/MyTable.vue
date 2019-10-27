<template>
  <div>
    <Table border :columns="columns12" :data="data6" ref="table">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="name1">
        <p>{{ row.name+'asfsdgvdsfv' }}</p>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Tooltip content="解决Bug" placement="top" theme="light">
          <Icon
            type="md-checkbox-outline"
            size="22"
            class="icon-active"
            @click="setSolveBugIsShow(index)"
          />
        </Tooltip>
        <Tooltip content="编辑Bug" placement="top" theme="light">
          <Icon
            type="ios-create-outline"
            size="22"
            @click.stop="setOneBugIsShow(index)"
            class="icon-active icon-size"
          />
        </Tooltip>
        <Tooltip content="查看详情" placement="top" theme="light">
          <Icon
            type="ios-log-in"
            size="22"
            @click.stop="setDetailsIsShow(index)"
            class="icon-active icon-size"
          />
        </Tooltip>
      </template>
    </Table>

    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns12: [
        {
          title: "项目",
          slot: "name"
        },
        {
          title: "级别",
          slot: "name1"
        },

        {
          title: "Bug标题",
          slot: "name"
        },

        {
          title: "指派给",
          key: "address"
        },
        {
          title: "创建者",
          key: "address"
        },
        {
          title: "创建日期",
          key: "address"
        },
        {
          title: "状态",
          key: "age",
          width: 100
        },
        {
          title: "操作",
          slot: "action",
          width: 120,
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    setSolveBugIsShow() {
      this.$store.commit("setSolveBugIsShow", true);
    },
    setOneBugIsShow() {
      this.$store.commit("setOneBugIsShow", true);
    },
    setDetailsIsShow() {
      this.$store.commit("setDetailsIsShow", true);
    }
    // show(index) {
    //   this.$Modal.info({
    //     title: "User Info",
    //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
    //   });
    // },
    // remove(index) {
    //   this.data6.splice(index, 1);
    // }
  }
};
</script>
<style lang="scss" scoped>
.icon-active {
  margin: 0px 5px;
  cursor: pointer;
}
.icon-active:hover {
  color: blue;
}
.icon-size {
  font-weight: 600;
}
</style>