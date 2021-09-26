<template>
<div class="Account">
  <b-row>
    <b-col sm="10">
      <div class="text-right">
        <h5> Jane VERYLONGNAME </h5>
        <p> RÖLE </p>
      </div>
    </b-col>
    <b-col sm="2">
      <img src="@/assets/image/Account.png" class="d-inline-block" alt="Account">
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style lang="scss" scoped>
.Account {
  min-width: 150px;
  max-width: 250px;

  h5 {
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
  }
  p {
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    text-align: right;
  }
  img {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

</style>
