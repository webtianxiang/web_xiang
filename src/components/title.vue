<template>
  <div class="title">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="less" scoped>
.title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
}
</style>
