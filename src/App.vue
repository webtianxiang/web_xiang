<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-link
          type="primary"
          style="font-size: 32px; line-height:70px;color: #ffffff">
          Web_翔的尝试
        </el-link>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <el-menu
            default-active="0"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="0" route="home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>算法分享</span>
              </template>
              <el-menu-item
                :index="getIndex(index)"
                v-for="(item,index) in algorithm"
                :route="item.path"
                :key="index">
                {{ item.name }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">JS学习</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">Vue学习</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">CSS学习</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">其他学习</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import algorithm from './router/algorithm.js'
console.log(algorithm)
export default {
  data () {
    return {
      algorithm: algorithm
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    getIndex(index) {
      return '1-' + index
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  height: 70px !important;
  background-color:#ef604a;
  color: #ffffff !important;
}

.el-aside {
  height: 100vh;
  // border-right: 1px solid #8f9398;
}

.el-main {
  height: 100vh;
  max-height: 100vh;
}
</style>
