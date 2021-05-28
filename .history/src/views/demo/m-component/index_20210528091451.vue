<template>
  <div>
    <component :is="currentView"></component>
  </div>
</template>
<script>
export default {
  name: 'component',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
