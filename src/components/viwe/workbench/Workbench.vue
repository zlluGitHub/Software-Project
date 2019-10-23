<template>
  <div style="overflow-x:hidden;">
  <section>
    <div class="page-header">
      <p class="muted">『 我们往往把自己的性格和人品说得言过其实了。如果真理被冷酷无情地揭示出来时，我们反倒不能明辨是非了。』 —— 《三幕悲剧》</p>
      <div class="header-content">
        <div class="left-content">
          <img
            src="https://beta.vilson.xyz/static/upload/member/avatar/20191021/75133823503a44b34269b7d4161b9078.jpg"
            alt
          />
          <div class="user-info">
            <p class="title">午饭时间到了，vilson，祝你开心每一天！</p>
            <!-- <p class="title">早安，vilson，祝你开心每一天！</p> -->
            <!-- <p class="muted">业务总监 | 业务中心 -</p> -->
            <p class="dashboard-workplace-header-tip-desc muted">
              <i class="ivu-icon ivu-icon-md-rainy"></i> 今日阴转小雨，22℃ - 32℃，出门记得带伞哦。
            </p>
          </div>
        </div>
        <ol class="right-content muted">
          <li>
            <p>任务数</p>
            <p class="item-text">201</p>
          </li>
          <li>
            <p>团队内排名</p>
            <p>
              <span class="item-text">2</span>/ 8
            </p>
          </li>
          <li>
            <p>项目数</p>
            <p class="item-text">201</p>
          </li>
        </ol>
      </div>
    </div>
    <div class="list">
      <div class="left">
        <!-- 项目列表 -->
        <ProjectList />
         <!-- 动态 -->
        <Trends />
      </div>
      <div class="right">
        <Operation/>
        <Member/>
      </div>
    </div>
  </section>
   </div>
</template>

<script>
import ProjectList from "./module/ProjectList";
import Trends from "./module/Trends";
import Operation from "./module/Operation";
import Member from "./module/Member";
export default {
  name: "work",
  components: {
    ProjectList,
    Trends,
    Operation,
    Member
  },
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
section {
  .list {
    display: flex;
    padding: 15px;
    .left {
      width: 70%;
      margin-right: 15px;
    }
    .right {
      width: 30%;
    }
  }
  .page-header {
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
    .muted {
      color: rgba(0, 0, 0, 0.45);
      margin-bottom: 15px;
    }
    .header-content {
      // margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      .left-content {
        display: flex;
        img {
          width: 64px;
          height: 64px;
          margin-right: 10px;
          border-radius: 50%;
        }
        .user-info {
          line-height: 33px;
          .title {
            font-size: 20px;
            font-weight: 700;
          }
        }
      }
      ol.right-content {
        list-style: none;
        display: flex;
        li {
          padding: 0 32px;
          position: relative;
          .item-text {
            font-size: 30px;
            color: #000;
          }
        }
        li:nth-child(1)::after,
        li:nth-child(2)::after {
          background-color: #e8e8e8;
          position: absolute;
          top: 8px;
          right: 0;
          width: 1px;
          height: 40px;
          content: "";
        }
      }
    }
  }
}
</style>

