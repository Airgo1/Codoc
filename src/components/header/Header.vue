<template>
<div class="ContainerNavBar my-0">
  <b-navbar type="light" class="container-fluid px-0 pb-0 pt-2">
    <b-navbar-brand class ="position-relative" href="#">
      <img src="@/assets/image/Logo_Codoc_Blue.png" class="d-inline-blocks mb-3" alt="Codoc">
    </b-navbar-brand>

    <b-collapse id="nav-collapse" class="NavItems mx-2 bottom-0" is-nav>
      <b-navbar-nav toggle-class="text-dark" class="mr-auto" fill>
        <b-nav-item to='recherche' class="NavItem" active-class="ActItem" >
          Recherche
        </b-nav-item>
        <b-nav-item to='/cohortes' class="NavItem" exact exact-active-class="ActItem">
            Mes cohortes
        </b-nav-item>
        <b-nav-item to='/outils' class="NavItem" exact exact-active-class="ActItem">
          Outils
        </b-nav-item>
        <b-nav-item to='/ecrf' class="NavItem" exact active-class="ActItem">
          Mes eCRF
        </b-nav-item>
        <b-nav-item to='/admin' class="NavItem" exact exact-active-class="ActItem">
          Admin
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="mb-3">
          <b-container>
            <b-input-group inline prepend="|" class="ButtonTemplate">
              <b-form-input v-model="inputSearch" placeholder="Rechercher d'un patient"></b-form-input>
              <b-input-group-append>
                <b-button ><b-icon icon="search" font-scale="1"></b-icon></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-container>
        </b-nav-form>
        <img src="@/assets/image/Bell.svg" class="d-inline-block mx-1 mb-3" alt="Bell">
      </b-navbar-nav>

      <div class="">
        <Account />
      </div>

    </b-collapse>

  </b-navbar>
</div>
</template>

<script>
import Account from '@/components/header/Account.vue'
export default {
  name: 'NavBar',
  components: {
    Account
  }
}
</script>

<style lang="scss" scoped>
.ButtonTemplate {
  background-color: #F1F3F8;
  border-radius: 0.25rem;
  min-width: 100px;
  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    padding-left: 5px;
    padding-right: 2px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #343A40;
    text-align: center;
    white-space: nowrap;
    background-color: #F1F3F8;
    border: 0px solid ;
    border-radius: 0.25rem;
  }
  .form-control {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #F1F3F8;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  .form-control {
    border: 0;
    padding-left: 0;
  }
  .btn-secondary {
    background-color: transparent;
    border-color: transparent;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #F1F3F8;
    border-color: #F1F3F8;
}
}

</style>
