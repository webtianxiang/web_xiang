<template>
  <div class="choose">
    <Title>选择算法</Title>
    <el-tabs
      class="choose-tabs"
      v-model="activeName">
      <el-tab-pane
        label="原生选择"
        name="nativeChoose">
        <el-button
          type="primary"
          @click="testNativeEfficiency">
          执行原生选择算法
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="改进选择"
        name="upgradeChoose">
        <el-button
          type="primary"
          @click="testUpgradeEfficiency">
          执行原生选择算法
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
      activeName: 'nativeChoose',
      JsCode: '',
      nativeChoose: `原生选择：
function ChooseSort (array = [], compareFn = this.defaultCompare) {
const { length } = array
let indexMin
for (let i = 0; i < length - 1; i++) {
  indexMin = i
  for (let j = i; j < length; j++) {
    if (compareFn(array[indexMin], array[j]) === 'Compare.BIGGER_THAN') {
      indexMin = j
    }
  }
  if (i !== indexMin) {
    swap(array, i,indexMin)
  }
}`,
      upgradeChoose: `改进选择：
function selectionSort (array, compareFn = defaultCompare) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i + 1; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === 'Compare.BIGGER_THAN') {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i ,indexMin)
    }
  }
  return array
}`
    }
  },
  watch: {
    activeName: {
      handler () {
        if (this.activeName === 'nativeChoose') {
          this.JsCode = this.nativeChoose
        } else if (this.activeName === 'upgradeChoose') {
          this.JsCode = this.upgradeChoose
        }
      },
      immediate: true
    }
  },
  methods: {
    testNativeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = performance.now()
      this.ChooseSort(array, this.defaultCompare)
      let end = performance.now()
      this.JsCode = this.JsCode + '\n选择排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    testUpgradeEfficiency () {
      let array = this.randomNumber()
      // 打印执行时间，以得到算法效率
      let start = performance.now()
      this.upgradeChooseSort(array, this.defaultCompare)
      let end = performance.now()
      this.JsCode = this.JsCode + '\n选择排序算法耗时：' + (end - start) + 'ms'
      console.log(array)
    },
    ChooseSort (array = [], compareFn = this.defaultCompare) {
      const { length } = array
      let indexMin
      for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
          if (compareFn(array[indexMin], array[j]) === 'Compare.BIGGER_THAN') {
            indexMin = j
          }
        }
        if (i !== indexMin) {
          this.swap(array, i, indexMin)
        }
      }
      return array
    },
    upgradeChooseSort (array = [], compareFn = this.defaultCompare) {
      const { length } = array
      let indexMin
      for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i + 1; j < length; j++) {
          if (compareFn(array[indexMin], array[j]) === 'Compare.BIGGER_THAN') {
            indexMin = j
          }
        }
        if (i !== indexMin) {
          this.swap(array, i, indexMin)
        }
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
.choose {
  &-tabs {
    margin-bottom: 20px;
  }
}
</style>
