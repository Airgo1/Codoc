<template>
  <b-container class="pb-3">
    <b-row no-gutters>
      <b-col cols="12" sm="6" class="text-left">
          <h3> {{ patient.last_name.toUpperCase() }} {{ patient.first_name[0].toUpperCase()+patient.first_name.substring(1) }} </h3>
      </b-col>
      <b-col cols="12" sm="6" class="texte-left text-sm-right">
        <span v-if='patient.sex==="M"'> Homme </span>
        <span v-else> Femme </span>
        <span> - Né le {{ patient.birth_date }}</span><br>
        <span  v-if="patient.death_date"> Décédé le {{ patient.death_date }} à {{ patient.age_death }} ans</span>
        <span v-else> Agé de {{ patient.age }} </span><br>
        <span> N° de DP : {{ patient.ipps[0].ipp }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PatientInformation',
  props: ['patient']
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: Assistant;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;

  /* identical to box height, or 120% */

  color: #212529;
}

</style>
