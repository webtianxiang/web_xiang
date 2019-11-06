<template>
  <div class="bubble">
    <Title>冒泡算法</Title>
    <el-tabs
      class="bubble-tabs"
      v-model="activeName">
      <el-tab-pane
        label="原生冒泡"
        name="nativeBubble">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行原生冒泡算法
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="改进冒泡"
        name="upgradeBubble">
        <el-button
          type="primary"
          @click="testUpgradeEfficiency">
          执行原生冒泡算法
        </el-button>
      </el-tab-pane>
    </el-tabs>
    <codemirror
      :value="JsCode"
      style="height: 600px"
      readonly>
    </codemirror>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'nativeBubble',
      JsCode: '',
      nativeBubble: `原生冒泡：
function bubbleSort (array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === 'Compare.BIGGER_THAN') {
        swap(array, j, j + 1)
      }
    }
  }
} `,
      upgradeBubble: `改进冒泡：
function bubbleSort (array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === 'Compare.BIGGER_THAN') {
        swap(array, j, j + 1)
      }
    }
  }
}`
    }
  },
  watch: {
    activeName: {
      handler () {
        if (this.activeName === 'nativeBubble') {
          this.JsCode = this.nativeBubble
        } else if (this.activeName === 'upgradeBubble') {
          this.JsCode = this.upgradeBubble
        }
      },
      immediate: true
    }
  },
  methods: {
    testNativeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.bubbleSort(array, this.defaultCompare)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n冒泡排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    testUpgradeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.upgradeBubbleSort(array, this.defaultCompare)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n冒泡排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    bubbleSort (array = [], compareFn = this.defaultCompare) {
      const { length } = array
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
          if (compareFn(array[j], array[j + 1]) === 'Compare.BIGGER_THAN') {
            this.swap(array, j, j + 1)
          }
        }
      }
    },
    upgradeBubbleSort (array = [], compareFn = this.defaultCompare) {
      const { length } = array
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (compareFn(array[j], array[j + 1]) === 'Compare.BIGGER_THAN') {
            this.swap(array, j, j + 1)
          }
        }
      }
    },
    defaultCompare (a, b) {
      return a < b ? 'Compare.LESS_THAN' : 'Compare.BIGGER_THAN'
    },
    swap (array, a, b) {
      [array[a], array[b]] = [array[b], array[a]]
    },
    randomNumber (array = [], n = 10000) {
      for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * n) + 1)
      }
      return array
    }
  },
  components: {
    Title: () => import('@/components/title' /* webpackChunkName: "components-title" */)
  }
}
</script>

<style lang="less">
.bubble {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
