
<template>
  <div class="Pie">
    <div class="MyPie" ref="MyPie"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    // contentData: {},
    // time: null,
    myEcharts: null
  }),
  //   props: ["data"],
  //   watch: {
  //     data(newVal, oldVal) {
  //       this.contentData = newVal;
  //       this.getGraph();
  //     }
  //   },
  //   created() {
  //     this.contentData = this.data;
  //   },
  mounted() {
    this.$nextTick(() => {
      this.getGraph();
    });
  },
  methods: {
    getGraph() {
      this.myEcharts = this.$echarts.init(this.$refs.MyPie);
      var data = [
        {
          value: 3661,
          name: "已完成"
        },
        {
          value: 5713,
          name: "未完成"
        },
        {
          value: 9938,
          name: "解决"
        },
        {
          value: 17623,
          name: "未解决"
        },
        {
          value: 3299,
          name: ">500w"
        }
      ];
      let option = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: "horizontal",
        // //   bottom: "0%",
        //   data: ["<10w", "10w-50w", "50w-100w", "100w-500w", ">500w"]
        // },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["50%", "50%"],
            radius: ["25%", "50%"],
            color: ["#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67"],

            // label: {
            //   normal: {
            //     position: "inner",
            //     formatter: "{d}%",

            //     textStyle: {
            //       color: "#fff",
            //       fontWeight: "bold",
            //       fontSize: 12
            //     }
            //   }
            // },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: data
          }
       
        ]
      };
      this.myEcharts.setOption(option, true);
      this.myEcharts.hideLoading();
    }
  },
  beforeDestroy() {
    this.myEcharts.clear();
  }
};
</script>
<style lang="scss" scoped>
.Pie {
  width: 100%;
  .MyPie {
    width: 100%;
    height: 180px;
  }
}
</style>