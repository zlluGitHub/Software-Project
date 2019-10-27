<template>
  <Modal v-model="isShow" width="26%" @on-cancel="handleShow">
    <div slot="header">
      <h3>
        <Icon type="ios-create-outline" size="22" />将xxx文件移动到
      </h3>
    </div>
    <div class="warp">
      <Tree :data="data5" :render="renderContent"></Tree>
    </div>
    <div slot="footer">
      <Button type="primary" @click.stop="handleShow">关闭</Button>
    </div>
  </Modal>
</template>
<script>
export default {
  data() {
    return {
      data5: [
        {
          title: "项目2",
          expand: true,

          children: [
            {
              title: "child 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  expand: true
                },
                {
                  title: "leaf 1-1-2",
                  expand: true
                }
              ]
            },
            {
              title: "child 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  expand: true
                },
                {
                  title: "leaf 1-2-1",
                  expand: true
                }
              ]
            }
          ]
        },
        {
          title: "项目2",
          expand: true,

          children: [
            {
              title: "child 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  expand: true
                },
                {
                  title: "leaf 1-1-2",
                  expand: true
                }
              ]
            },
            {
              title: "child 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  expand: true
                },
                {
                  title: "leaf 1-2-1",
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: "default",
        size: "small"
      }
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
      return this.$store.state.show.fileMoveIsShow;
    }
  },
  methods: {   renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h("span", {
            style: {
              display: "inline-block",
              float: "right",
              marginRight: "32px"
            }
          })
        ]
      );
    },
    handleShow() {
      this.$store.commit("setFileMoveIsShow", false);
    }
  }
};
</script>


