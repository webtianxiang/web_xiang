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
      <el-tab-pane
        label="双路快排"
        name="doublequick">
        <el-button
          type="primary"
          @click="testDoubleQuickSort">
          执行双路快排算法
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="三路快排"
        name="triplequick">
        <el-button
          type="primary"
          @click="testTripleQuickquickSort">
          执行三路快排算法
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
}`,
      doublequick: `
// 主方法
function quickSort (array) {
  return quick(array, 0, array.length - 1)
}
// 递归函数
function quick (array, left, right) {
  let index = partition(array, left, right)
  if (left < index - 1) {
    quick(array, left, index - 1)
  }
  if (right > index + 1) {
    quick(array, index + 1, right)
  }
  return array
}
// 划分过程
function partition (array, left, right) {
  const pivot = array[left]
  let i = left + 1
  let j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  swap(array, left, j)
  return j
}`,
      triplequick: `
// 主方法
function quickSort (array) {
  return quick(array, 0, array.length - 1)
}
// 递归函数
function quick (array, left, right) {
  let random = Math.floor(Math.random()*(right - left + 1) + left)
  swap(array, left, random)
  const pivot = array[left]
  let i = left + 1
  let gt = right + 1
  let lt = left
  while (i < gt) {
    if (array[i] < pivot) {
      swap(array, i++, lt + 1)
      lt ++
    } else if (array[i] > pivot) {
      swap(array, i, gt - 1)
      gt--
    } else {
      i++
    }
  }
  swap(array, left, lt)
  if (left < lt - 1) {
    quick(array, left, lt - 1)
  }
  if (right > lt + 1) {
    quick(array, gt, right)
  }
  return array
}
// 交换方法
function swap (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
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
        } else if (this.activeName === 'doublequick') {
          this.JsCode = this.doublequick
        } else if (this.activeName === 'triplequick') {
          this.JsCode = this.triplequick
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
      array = this.singleQuickSort(array)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    testUpgradeSinglequick () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.upgradeSingleQuickSort(array, 0, array.length - 1)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    testDoubleQuickSort () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.doubleQuickSort(array)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    testTripleQuickquickSort () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = new Date().getTime()
      this.tripleQuickquickSort(array)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n快排排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
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
    // 主方法
    doubleQuickSort (array) {
      return this.doubleQuick(array, 0, array.length - 1)
    },
    // 递归函数
    doubleQuick (array, left, right) {
      let index = this.partition(array, left, right)
      if (left < index - 1) {
        this.doubleQuick(array, left, index - 1)
      }
      if (right > index + 1) {
        this.doubleQuick(array, index + 1, right)
      }
      return array
    },
    // 划分过程
    partition (array, left, right) {
      const pivot = array[left]
      let i = left + 1
      let j = right
      while (i <= j) {
        while (array[i] < pivot) {
          i++
        }
        while (array[j] > pivot) {
          j--
        }
        if (i <= j) {
          this.swap(array, i, j)
          i++
          j--
        }
      }
      this.swap(array, left, j)
      return j
    },
    // 主方法
    tripleQuickquickSort (array) {
      return this.tripleQuick(array, 0, array.length - 1)
    },
    // 递归函数
    tripleQuick (array, left, right) {
      let random = Math.floor(Math.random() * (right - left + 1) + left)
      this.swap2(array, left, random)
      const pivot = array[left]
      let i = left + 1
      let gt = right + 1
      let lt = left
      while (i < gt) {
        if (array[i] < pivot) {
          this.swap2(array, i++, lt + 1)
          lt++
        } else if (array[i] > pivot) {
          this.swap2(array, i, gt - 1)
          gt--
        } else {
          i++
        }
      }
      this.swap2(array, left, lt)
      if (left < lt - 1) {
        this.tripleQuick(array, left, lt - 1)
      }
      if (right > lt + 1) {
        this.tripleQuick(array, gt, right)
      }
      return array
    },
    // 交换方法
    swap2 (array, a, b) {
      [array[a], array[b]] = [array[b], array[a]]
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
