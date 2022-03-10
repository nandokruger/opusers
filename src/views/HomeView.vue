<template>
  <b-container class="bv-example-row">
    <b-row class="vh-70" align-v="center">
      <b-col>
        <h2>Usuários</h2>
        <router-link to="/insert-user">
          <b-button class="mb-3">Adicionar Usuário</b-button>
        </router-link>
        <UsersList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'HomeView',
  components: {
    UsersList
  }
}
</script>
<style>
.vh-70 {
  min-height: 70vh !important;
}
</style>
