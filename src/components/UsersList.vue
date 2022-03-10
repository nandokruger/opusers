<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-table striped hover :fields="fields" :items="users">
          <template #cell(actions)="{ item }">
            <b-button variant="danger" @click="removeUser(item)">
              <i class="fa fa-trash"></i> Exluir
            </b-button>
          </template>
        </b-table>
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
      users: [],
      fields: [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
        { key: 'type', label: 'Tipo de Acesso' },
        { key: 'actions', label: 'Ações' }
      ]
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    removeUser(user) {
      console.log('TODO: faltou implentar a exclusao :(', user)
    }
  },
  mounted() {
    this.users = this.getUsers
  }
}
</script>
