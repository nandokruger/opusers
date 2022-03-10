<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-table striped hover :items="users"></b-table>
        <b-alert show v-if="!users.length" variant="warning"
          >Nenhum usuário adicionado</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      users: []
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    getDatabase() {}
  },
  mounted() {
    // this.getDatabase()
    this.users = this.getUsers
    console.log('store users', this.getUsers)
  }
}
</script>
