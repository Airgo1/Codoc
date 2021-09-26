<template>
  <b-container class="pb-3">
    <b-row no-gutters>
      <b-col cols="12" sm="6" class="text-left">
          <h3> {{ name }} </h3>
      </b-col>
      <b-col cols="12" sm="6" class="texte-left text-sm-right">
        <span> {{ type }} - Né le {{ dateBorn }}</span><br>
        <span  v-if="dateDeath"> Décédé le {{ dateDeath }} à {{ age }} ans</span><br>
        <span> N° de DP : {{ DP }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PatientInformation',
  data () {
    return {
      name: 'SAXON Jamie',
      type: 'Homme',
      dateBorn: '06/01/1975',
      dateDeath: '04/07/2011',
      age: 29,
      DP: 3566
    }
  }
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
