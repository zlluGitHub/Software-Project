<template>
  <div class="content">
    <div class="left">
      <div class="chart">
        <pie />
      </div>
      <h2>文档仓库</h2>
      <Tree :data="data5" :render="renderContent"></Tree>
    </div>
    <div class="right">
      <div class="query">
        <div class="select">项目1《文件夹1</div>
        <div class="handle">
          <div class="search-mar">
            <Input search enter-button placeholder="请输入文件名..." />
          </div>
          <div>
            <Dropdown trigger="click" @on-click="handleDropdown">
              <div class="add">
                新建
                <Icon type="ios-arrow-down"></Icon>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem name="新建文件夹">新建文件夹</DropdownItem>
                <DropdownItem name="新建文档">新建文档</DropdownItem>
                <DropdownItem name="新建Wiki">新建Wiki</DropdownItem>
                <DropdownItem name="上传文件">上传文件</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div class="btn-group">
            <span @click="handleIsList(true)" :class="[isList?'click-active':'']">
              <Icon type="md-apps" size="24" />
            </span>
            <span @click="handleIsList(false)" :class="[!isList?'click-active':'']">
              <Icon type="md-menu" size="24" />
            </span>
          </div>
          <!-- <div>
            <Button type="success" ghost @click.stop="setOneBugIsShow">+ 新建</Button>
          </div>-->
        </div>
      </div>
      <div class="warp">
        <ul class="no-list" v-if="isList">
          <li>
            <div>
              <Icon type="ios-folder-outline" size="70" />
            </div>
            <p>
              <span class="name">asefsa.html</span>
            </p>
            <div class="more">
              <Dropdown trigger="click" @on-click="handleDropdown" placement="bottom-end">
                <Icon type="ios-more" size="30" />
                <DropdownMenu slot="list">
                  <DropdownItem name="收藏">从收藏夹移出</DropdownItem>
                  <DropdownItem name="重命名">重命名</DropdownItem>
                  <DropdownItem name="编辑">编辑</DropdownItem>
                  <DropdownItem name="移动到">移动到</DropdownItem>
                  <DropdownItem name="详情">详情</DropdownItem>
                  <DropdownItem name="权限">权限</DropdownItem>
                  <DropdownItem name="设置密码">设置密码</DropdownItem>
                  <DropdownItem name="删除">删除</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </li>
          <li>
            <div>
              <Icon type="ios-folder-outline" size="70" />
            </div>
            <p>
              <span class="name">asefsa.html</span>
            </p>
            <div class="more">
              <Dropdown trigger="click" @on-click="handleDropdown" placement="bottom-end">
                <Icon type="ios-more" size="30" />
                <DropdownMenu slot="list">
                  <DropdownItem name="收藏">从收藏夹移出</DropdownItem>
                  <DropdownItem name="重命名">重命名</DropdownItem>
                  <DropdownItem name="编辑">编辑</DropdownItem>
                  <DropdownItem name="移动到">移动到</DropdownItem>
                  <DropdownItem name="详情">详情</DropdownItem>
                  <DropdownItem name="权限">权限</DropdownItem>
                  <DropdownItem name="设置密码">设置密码</DropdownItem>
                  <DropdownItem name="删除">删除</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </li>
        </ul>
        <!-- 列表 -->
        <div class="list" v-else>
          <Table border :columns="columns5" :data="data6">
            <template slot-scope="{ row, index }" slot="action" class="row-warp">
              <Tooltip content="收藏" placement="top" theme="light">
                <Icon
                  type="md-star"
                  size="22"
                  class="icon-active"
                  @click="setSolveBugIsShow(index)"
                />
                <!-- <Icon type="md-star" />
                <Icon type="md-star-outline" />-->
              </Tooltip>
              <Tooltip content="编辑" placement="top" theme="light">
                <Icon
                  type="ios-create-outline"
                  size="22"
                  class="icon-active"
                  @click="setSolveBugIsShow(index)"
                />
              </Tooltip>

              <Dropdown trigger="click" @on-click="handleDropdown">
                <Icon type="ios-more" size="30" />
                <DropdownMenu slot="list">
                  <DropdownItem>重命名</DropdownItem>
                  <DropdownItem>移动到</DropdownItem>
                  <DropdownItem>详情</DropdownItem>
                  <DropdownItem>权限</DropdownItem>
                  <DropdownItem>设置密码</DropdownItem>
                  <DropdownItem>删除</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </template>
          </Table>
        </div>
        <!-- 重命名 -->
        <FileRename />
        <!-- 移动文件 -->
        <FileMove />
        <!-- 文件详情 -->
        <FileDetails />
        <!-- 新建文档 -->
        <FileAdd />
      </div>
    </div>
  </div>
</template>

<script>
import pie from "./module/pie";
import FileDetails from "./module/FileDetails";
import FileMove from "./module/FileMove";
import FileRename from "./module/FileRename";
import FileAdd from "./module/FileAdd";
export default {
  components: {
    pie,
    FileDetails,
    FileRename,
    FileMove,
    FileAdd
  },
  data() {
    return {
      isList: true,
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
      },
      columns5: [
        {
          title: "文档名称",
          key: "date",
          sortable: true
        },
        {
          title: "类型",
          key: "name"
        },
        {
          title: "更新时间",
          key: "age",
          sortable: true
        },
        {
          title: "创建者",
          key: "address"
        },
        {
          title: "属性",
          key: "address"
        },
        {
          title: "操作",
          slot: "action",
          width: 120,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleIsList(mark) {
      this.isList = mark;
    },
    handleDropdown(key) {
      console.log(key);
      switch (key) {
        case "重命名":
          this.$store.commit("setFileRenameIsShow", true);
          break;
        case "移动到":
          this.$store.commit("setFileMoveIsShow", true);
          break;
        case "详情":
          this.$store.commit("setFileDetailsIsShow", true);
          break;

        // 新建
        case "新建文件夹":
          this.$store.commit("setFileRenameIsShow", true);
          break;
        case "新建文档":
          this.$store.commit("setFileAddIsShow", true);
          break;
        case "新建Wiki":
          this.$store.commit("setFileDetailsIsShow", true);
          break;
        case "上传文件":
          this.$store.commit("setFileDetailsIsShow", true);
          break;
        default:
          break;
      }
    },

    renderContent(h, { root, node, data }) {
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
    append(data) {
      const children = data.children || [];
      children.push({
        title: "appended node",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
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
        .search-mar {
          margin-right: 15px;
        }
        .btn-group {
          display: flex;
          margin-left: 10px;
          margin-left: 20px;
          span {
            border: 1px solid #d6dae3;
            padding: 3px 10px;
            cursor: pointer;
            transition: all 0.3s;
          }
          span:nth-child(1) {
            border-right: 0px;
          }
          span:hover,
          span.click-active {
            color: #fff;
            background: #8c92a4;
          }
        }
        .add {
          cursor: pointer;
          border: 1px solid transparent;
          white-space: nowrap;
          padding: 5px 15px;
          color: #515a6e;
          border-color: #dcdee2;
        }
      }
    }
  }
  .warp {
    padding: 20px;

    .list {
      i {
        margin: 3px;
      }
    }
    > ul.no-list {
      display: flex;
      flex-wrap: wrap;

      > li {
        position: relative;
        padding: 30px 27px 20px 27px;
        border: 1px solid #e3e9ed;
        border-radius: 4px;
        transition: all 0.3s;
        margin: 10px;
        cursor: pointer;
        .more {
          position: absolute;
          top: 1px;
          right: 7px;
        }
        .name {
          color: #005980;
        }
      }
      > li:hover {
        background-color: #e9f2fb;
      }
    }
  }
}
</style>
