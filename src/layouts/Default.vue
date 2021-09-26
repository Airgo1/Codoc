<template>
  <div>

    <Header />

    <div class="container-lg">
      <slot />
    </div>

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
