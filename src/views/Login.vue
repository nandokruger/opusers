<template>
  <b-container class="bv-example-row">
    <b-row class="vh-70" align-v="center">
      <b-col><login /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'loginView',
  components: {
    Login
  }
}
</script>

<style>
.vh-70 {
  min-height: 70vh !important;
}
</style>
