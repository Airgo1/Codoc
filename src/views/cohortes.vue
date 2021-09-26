<template>
  <b-container class="my-2">
    <Breadcumb />

    <PatientInformation v-bind:patient='patient'/>

    <TabDocument v-bind:propsdata="allData.matched_documents"/>
  </b-container>
</template>

<script>
import Breadcumb from '@/components/utils/Breadcrumb.vue'
import PatientInformation from '@/components/PatientInformation.vue'
import TabDocument from '@/components/TabDocuments.vue'
import data from '@/assets/data/data - codoc.json'
export default {
  name: 'Home',
  components: {
    Breadcumb,
    PatientInformation,
    TabDocument
  },
  data () {
    return {
      allData: data,
      patient: {}
    }
  },
  created () {
    this.patient.id = this.allData.id
    this.patient.last_name = this.allData.last_name
    this.patient.first_name = this.allData.first_name
    this.patient.birth_date = this.allData.birth_date
    this.patient.death_date = this.allData.death_date
    this.patient.age = this.allData.age
    this.patient.age_death = this.allData.age_death
    this.patient.sex = this.allData.sex
    this.patient.maiden_name = this.allData.maiden_name
    this.patient.ipps = this.allData.ipps
  }
}
</script>

<style lang="scss" scoped>

</style>
