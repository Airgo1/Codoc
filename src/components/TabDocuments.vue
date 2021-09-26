<template>
    <b-tabs nav-class="wrapperTab">
    <b-tab title="Documents" title-link-class="tab">
      <Documents />
    </b-tab>
    <b-tab title="Biologie" title-link-class="tab">

    </b-tab>
    <b-tab title="Prescriptions" >

    </b-tab>
    <b-tab title="Chrnologie" >

    </b-tab>
    <b-tab title="Parcours" >

    </b-tab>
    <b-tab title="Sejours" >

    </b-tab>
    <b-tab title="Phenotypes" >

    </b-tab>
    <b-tab title="Similarite" >

    </b-tab>
    <b-tab title="Cohortes" >

    </b-tab>
    <b-tab title="eCRF" >

    </b-tab>
  </b-tabs>
</template>

<script>
import Documents from '@/components/tabs/Documents.vue'
export default {
  name: 'tabsComponent',
  components: {
    Documents
  }
}
</script>

<style lang="scss">
.tab {
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #343A40;
}
</style>
