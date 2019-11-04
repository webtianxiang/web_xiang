<template>
  <div class="insert">
    <Title>插入算法</Title>
    <el-tabs
      class="insert-tabs"
      v-model="activeName">
      <el-tab-pane
        label="原生插入"
        name="nativeInsert">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行插入算法
        </el-button>
      </el-tab-pane>
    </el-tabs>
    <codemirror
      :value="JsCode"
      readonly>
    </codemirror>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'nativeInsert',
      JsCode: '',
      nativeSort: `插入排序算法：
function insertSort (array, compareFn = defaultCompare) {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = array[i]
    while (j > 0 && compareFn(array[j-1], temp) === 'Compare.BIGGER_THAN') {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
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
      this.insertSort(array, this.defaultCompare)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n插入排序算法耗时：' + (end - start) + 'ms'
    },
    insertSort (array, compareFn = this.defaultCompare) {
      const { length } = array
      let temp
      for (let i = 1; i < length; i++) {
        let j = i
        temp = array[i]
        while (j > 0 && compareFn(array[j - 1], temp) === 'Compare.BIGGER_THAN') {
          array[j] = array[j - 1]
          j--
        }
        array[j] = temp
      }
      return array
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
.insert {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
