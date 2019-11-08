<template>
  <div class="home">
    <Title>首页</Title>
    <el-card class="home-card">
      <img src="../assets/tianxiang01.jpg" class="home-card__image">
      <div style="padding: 14px;">
        <span>感谢大家在百忙之中抽出时间来听我的分享</span>
        <div class="bottom clearfix">
          <el-button
            type="text"
            class="button"
            @click="active = !active">
            点开有惊喜
          </el-button>
        </div>
      </div>
    </el-card>
    <transition name="card">
    <el-card
      v-if="active === true"
      class="home-card2">
      <div class="home-card2__text">
        <span>感谢大家在百忙之中抽出时间来听我的分享</span><br />
        <span>田翔</span><br />
        <span>男</span><br />
        <span>22岁</span><br />
        <span>web前端开发</span><br />
        <span>喜欢旅游、篮球、王者荣耀</span><br />
        <!-- <span>web前端开发</span><br />
        <span>web前端开发</span><br />
        <span>web前端开发</span><br />
        <span>web前端开发</span><br />
        <span>web前端开发</span><br />
        <span>web前端开发</span><br /> -->
      </div>
    </el-card>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      active: false,
      disText: ''
    }
  },
  // computed: {
  //   introduce: function() {
  //     let disArr = this.introduceText.split(' ')
  //     let disText = ''
  //     disArr.forEach((item, index) => {
  //       setTimeout(function () {
  //         this.disText = item.toString() + '\n'
  //       }, 1000)
  //     })
  //   }
  // },
  components: {
    Title: () => import('@/components/title' /* webpackChunkName: "components-title" */)
  }
}
</script>
<style lang="less" scoped>
.home {
  &-card {
    width: 400px;
    float: left;
    &__image {
      width: 360px;
      height: 480px;
    }
  }
  &-card2 {
    width: 400px;
    height: 615px;
    float: left;
    margin-left: 20px;
    &__text {
      padding: 14px;
      span {
        font-size: 16px;
        line-height: 45px;
      }
    }
  }
  .card-enter-active {
    animation: card-in 1.5s;
  }
  .card-leave-active {
    animation: card-in .5s reverse;
  }
  @keyframes card-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
