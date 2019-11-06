<template>
  <div class="bucket">
    <Title>计数算法</Title>
    <el-tabs
      class="bucket-tabs"
      v-model="activeName">
      <el-tab-pane
        label="桶排序"
        name="nativeBucket">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行桶排序算法
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
      activeName: 'nativeBucket',
      JsCode: '',
      nativeSort: `桶排序算法：
// 主方法
function bucketSort (array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }
  const buckets = createBuckets(array, bucketSize)
  array = sortBuckets(buckets)
  return array
}
// 创建桶，并填入元素
function createBuckets (array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}
// 对每个桶进行排序
function sortBuckets (buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length !== 0) {
      buckets[i] = insertSort(buckets[i], defaultCompare)
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}
// 插入排序算法
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
}
// 比较算法
function defaultCompare (a, b) {
  return a < b ? 'Compare.LESS_THAN' : 'Compare.BIGGER_THAN'
}
// 交换算法
function swap (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
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
      array = this.bucketSort(array, 10)
      let end = new Date().getTime()
      this.JsCode = this.JsCode + '\n桶排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    // 主方法
    bucketSort (array, bucketSize = 5) {
      if (array.length < 2) {
        return array
      }
      const buckets = this.createBuckets(array, bucketSize)
      return this.sortBuckets(buckets)
    },
    // 创建桶，并填入元素
    createBuckets (array, bucketSize) {
      let minValue = array[0]
      let maxValue = array[0]
      for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
          minValue = array[i]
        } else if (array[i] > maxValue) {
          maxValue = array[i]
        }
      }
      const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
      const buckets = []
      for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
      }
      for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(array[i])
      }
      return buckets
    },
    // 对每个桶进行排序
    sortBuckets (buckets) {
      const sortedArray = []
      for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].length !== 0) {
          buckets[i] = this.insertSort(buckets[i], this.defaultCompare)
          sortedArray.push(...buckets[i])
        }
      }
      return sortedArray
    },
    // 插入排序算法
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
    // 比较算法
    defaultCompare (a, b) {
      return a < b ? 'Compare.LESS_THAN' : 'Compare.BIGGER_THAN'
    },
    // 交换算法
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
.bucket {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
