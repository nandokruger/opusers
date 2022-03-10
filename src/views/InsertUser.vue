<template>
  <b-container class="bv-example-row">
    <b-row class="vh-70" align-v="center">
      <b-col>
        <b-link to="home">Home</b-link>
        <InsertUser />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import InsertUser from '@/components/InsertUser.vue'

export default {
  name: 'InsertUserView',
  components: {
    InsertUser
  }
}
</script>

<style>
.vh-70 {
  min-height: 70vh !important;
}
</style>
