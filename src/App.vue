<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'
export default {
  name: 'App',
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  created () {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout)
  },
  updated () {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style lang="scss">

</style>
