<template>
  <div class="trends">
    <Card dis-hover>
      <p slot="title">
        <Icon type="ios-people"></Icon>小组成员
      </p>
      <!-- <a href="#" slot="extra">
        <Icon type="ios-loop-strong"></Icon>全部项目
      </a>-->
      <ul>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-green ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">在线</span>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-green ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">在线</span>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-red ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">离线</span>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-green ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">在线</span>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-green ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">在线</span>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div>
              <h3>钟小玉</h3>
              <p>
                <span>项目1、</span>
                <span>项目2</span>
              </p>
            </div>
          </div>
          <div class="ivu-tag ivu-tag-size-default ivu-tag-green ivu-tag-checked">
            <span class="ivu-tag-text ivu-tag-color-white">在线</span>
          </div>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: "trends",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
.trends {
  ul {
    li {
      justify-content: space-between;
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
      > div {
        justify-content: space-between;
        display: flex;
      }

      img {
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: rgb(128, 134, 149);
      }
    }
  }
}
</style>
