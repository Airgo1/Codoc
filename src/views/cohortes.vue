<template>
  <b-container class="my-2">
    <Breadcumb />

    <PatientInformation />

    <TabDocument />
  </b-container>
</template>

<script>
import Breadcumb from '@/components/utils/Breadcrumb.vue'
import PatientInformation from '@/components/PatientInformation.vue'
import TabDocument from '@/components/TabDocuments.vue'
export default {
  name: 'Home',
  components: {
    Breadcumb,
    PatientInformation,
    TabDocument
  }
}
</script>

<style lang="scss" scoped>

</style>
