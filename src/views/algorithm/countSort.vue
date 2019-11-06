<template>
  <div class="count">
    <Title>计数算法</Title>
    <el-tabs
      class="count-tabs"
      v-model="activeName">
      <el-tab-pane
        label="计数排序"
        name="nativeCount">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行计数算法
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
      activeName: 'nativeCount',
      JsCode: '',
      nativeSort: `计数排序算法：
// 核心算法
function countSort (array) {
  if (array.length < 2) {
    return array
  }
  const maxValue = findMaxValue(array)
  const countsArray = new Array(maxValue + 1)
  array.forEach(item => {
    if (!countsArray[item]) {
      countsArray[item] = 0
    }
    countsArray[item]++
  })
  let sortedIndex = 0
  countsArray.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}
// 寻找数组中最大的元素值
function findMaxValue (array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}`
    }
  },
  watch: {
    activeName: {
      handler () {
        this.JsCode = this.nativeSort
      },
      immediate: true
    }
  },
  methods: {
    testNativeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      array = this.countSort(array)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n计数排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    // 核心算法
    countSort (array) {
      if (array.length < 2) {
        return array
      }
      const maxValue = this.findMaxValue(array)
      const countsArray = new Array(maxValue + 1)
      array.forEach(item => {
        if (!countsArray[item]) {
          countsArray[item] = 0
        }
        countsArray[item]++
      })
      let sortedIndex = 0
      countsArray.forEach((count, i) => {
        while (count > 0) {
          array[sortedIndex++] = i
          count--
        }
      })
      return array
    },
    // 寻找数组中最大的元素值
    findMaxValue (array) {
      let max = array[0]
      for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i]
        }
      }
      return max
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
.count {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
