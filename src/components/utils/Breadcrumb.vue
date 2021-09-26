<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Mes cohortes',
          href: '#'
        },
        {
          text: 'Cohortes XXX',
          href: '#'
        },
        {
          text: 'Saxon Jamie',
          active: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: transparent;
    border-radius: 0.25rem;
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #233C73;
}
</style>
