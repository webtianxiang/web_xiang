<template>
  <div class="quick">
    <Title>快排算法</Title>
    <el-tabs
      class="quick-tabs"
      v-model="activeName">
      <el-tab-pane
        label="单路快排"
        name="singleQuick">
        <el-button
          type="primary"
          @click="testSingleQuick">
          执行原生快排算法
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="改进单路快排"
        name="upgradeSinglequick">
        <el-button
          type="primary"
          @click="testUpgradeSinglequick">
          执行原生快排算法
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
      activeName: 'singleQuick',
      JsCode: '',
      singleQuick: `单路快排：
// 单路快排算法
function quickSort (arr) {
  if (arr.length <= 1) return arr
  pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}`,
      upgradeSinglequick: `改进单路快排：
function quickSort(array, left, right) {
  if (left < right) {
    let i = left
    let j = right
    let pivot = array[left]
    while (i < j) {
      while (array[j] > pivot) {
        j--
      }
      if (i < j) {
        array[i++] = array[j]
      }
      while (array[i] < pivot) {
        i++
      }
      if (i < j) {
        array[j--] = array[i]
      }
    }
    array[i] = pivot
    quickSort(array, left, i - 1)
    quickSort(array, i + 1, right)
  }
  return array
}`
    }
  },
  watch: {
    activeName: {
      handler () {
        if (this.activeName === 'singleQuick') {
          this.JsCode = this.singleQuick
        } else if (this.activeName === 'upgradeSinglequick') {
          this.JsCode = this.upgradeSinglequick
        }
      },
      immediate: true
    }
  },
  methods: {
    testSingleQuick () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.singleQuickSort(array)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
    },
    testUpgradeSinglequick () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.upgradeSingleQuickSort(array, 0, array.length - 1)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
    },
    singleQuickSort (arr = []) {
      if (arr.length <= 1) return arr
      let pivotIndex = Math.floor(arr.length / 2)
      let pivot = arr.splice(pivotIndex, 1)[0]
      let left = []
      let right = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return this.singleQuickSort(left).concat([pivot], this.singleQuickSort(right))
    },
    upgradeSingleQuickSort (array = [], left, right) {
      if (left < right) {
        let i = left
        let j = right
        let pivot = array[left]
        while (i < j) {
          while (array[j] > pivot) {
            j--
          }
          if (i < j) {
            array[i++] = array[j]
          }
          while (array[i] < pivot) {
            i++
          }
          if (i < j) {
            array[j--] = array[i]
          }
        }
        array[i] = pivot
        this.upgradeSingleQuickSort(array, left, i - 1)
        this.upgradeSingleQuickSort(array, i + 1, right)
      }
      return array
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
.quick {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
