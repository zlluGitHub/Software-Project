<template>
  <div class="project-list">
    <Card dis-hover>
      <p slot="title">
        <Icon type="md-apps"></Icon>我的项目
      </p>
      <a href="#" slot="extra">
        <Icon type="ios-loop-strong"></Icon>全部项目
      </a>
      <ul>
        <li>
          <div class="touxiang">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt />
            <span>Ant Design</span>
          </div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <div class="project-item">
            <a href="/#/">vilson</a>
            <span class="datetime">Invalid date</span>
          </div>
        </li>
        <li>
          <div class="touxiang">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt />
            <span>Ant Design</span>
          </div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <div class="project-item">
            <a href="/#/">vilson</a>
            <span class="datetime">Invalid date</span>
          </div>
        </li>
        <li>
          <div class="touxiang">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt />
            <span>Ant Design</span>
          </div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <div class="project-item">
            <a href="/#/">vilson</a>
            <span class="datetime">Invalid date</span>
          </div>
        </li>
        <li>
          <div class="touxiang">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt />
            <span>Ant Design</span>
          </div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <div class="project-item">
            <a href="/#/">vilson</a>
            <span class="datetime">2 年前</span>
          </div>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: "project-list",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
.project-list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 20px;
      width: 33.3%;
      box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8,
        inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
      .touxiang {
        display: flex;
        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          border-radius: 50%;
        }
      }
      p {
        //   height: 44px;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.45);
        padding: 10px 0px;
        font-size: 14px;
        font-variant: tabular-nums;
      }
      .project-item {
        color: rgba(0, 0, 0, 0.45);
        display: flex;
        justify-content: space-between;
        a {
          color: rgba(0, 0, 0, 0.45);
        }
        .datetime {
          color: rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>
