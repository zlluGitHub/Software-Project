<template>
  <div class="operation">
    <Card dis-hover>
      <p slot="title">
        <Icon type="md-heart"></Icon>
        快捷操作
      </p>
      <!-- <a href="#" slot="extra">
        <Icon type="ios-loop-strong"></Icon>全部项目
      </a> -->
      <ul>
        <li>
          <Icon type="md-heart"></Icon>
          <p>主控制台</p>
        </li>
        <li>
          <Icon type="md-heart"></Icon>
          <p>表单</p>
        </li>
        <li>
          <Icon type="md-heart"></Icon>
          <p>列表</p>
        </li>
        <li>
          <Icon type="md-heart"></Icon>
          <p>設置</p>
        </li>
        <li>
          <Icon type="md-heart"></Icon>
          <p>工具</p>
        </li>
        <li>
          <Icon type="md-heart"></Icon>
          <p>团队</p>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: "operation",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
.operation {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
        text-align: center;
        width: 33.3%;
        margin: 20px 0;
        p{
            margin-top: 10px;
        }
    }
  }
}
</style>
