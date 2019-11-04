<template>
  <div class="merge">
    <Title>归并算法</Title>
    <el-tabs
      class="merge-tabs"
      v-model="activeName">
      <el-tab-pane
        label="原生归并"
        name="nativeMerge">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行原生归并算法
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="改进归并"
        name="upgrademerge">
        <el-button
          type="primary"
          @click="testUpgradeEfficiency">
          执行原生归并算法
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
      activeName: 'nativeMerge',
      JsCode: '',
      nativeMerge: `原生归并：
// 将大数组转化为多个小数组直到其中只有一个项
function mergeSort (array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}
// 合并数组
function merge (left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === 'Compare.LESS_THAN' ? left[i++] : right[j++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}`,
      upgrademerge: `改进归并：
function MergeSort (array, compareFn = defaultCompare) {
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
        if (this.activeName === 'nativeMerge') {
          this.JsCode = this.nativeMerge
        } else if (this.activeName === 'upgrademerge') {
          this.JsCode = this.upgrademerge
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
      this.mergeSort(array, this.defaultCompare)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n归并排序算法耗时：' + (end - start) + 'ms'
    },
    testUpgradeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.upgradeMergeSort(array, this.defaultCompare)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n归并排序算法耗时：' + (end - start) + 'ms'
    },
    // 将大数组转化为多个小数组直到其中只有一个项
    mergeSort (array, compareFn = this.defaultCompare) {
      if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left = this.mergeSort(array.slice(0, middle), compareFn)
        const right = this.mergeSort(array.slice(middle, length), compareFn)
        array = this.merge(left, right, compareFn)
      }
      return array
    },
    // 合并数组
    merge (left, right, compareFn) {
      let i = 0
      let j = 0
      const result = []
      while (i < left.length && j < right.length) {
        result.push(
          compareFn(left[i], right[j]) === 'Compare.LESS_THAN' ? left[i++] : right[j++]
        )
      }
      return result.concat(i < left.length ? left.slice(i) : right.slice(j))
    },
    // 将大数组转化为多个小数组直到其中只有一个项
    upgradeMergeSort (array, compareFn = this.defaultCompare) {
      if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left = this.mergeSort(array.slice(0, middle), compareFn)
        const right = this.mergeSort(array.slice(middle, length), compareFn)
        array = this.upgradeMerge(left, right, compareFn)
      }
      return array
    },
    // 合并数组
    upgradeMerge (left, right, compareFn) {
      let i = 0
      let j = 0
      const result = []
      if (left[left.length] <= right[0]) {
        return result.concat(left).concat(right)
      } else if (left[0] >= right[right.length]) {
        return result.concat(right).concat(left)
      }
      while (i < left.length && j < right.length) {
        result.push(
          compareFn(left[i], right[j]) === 'Compare.LESS_THAN' ? left[i++] : right[j++]
        )
      }
      return result.concat(i < left.length ? left.slice(i) : right.slice(j))
    },
    defaultCompare (a, b) {
      return a < b ? 'Compare.LESS_THAN' : 'Compare.BIGGER_THAN'
    },
    swap (array, a, b) {
      [array[a], array[b]] = [array[b], array[a]]
    },
    randomNumber (array = [], n = 1000000) {
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
.merge {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
