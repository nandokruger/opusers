<template>
  <b-container class="insert-container">
    <b-row>
      <b-col>
        <h2>Adicionar Usuário</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="input-1"
            class="mb-2"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Digite o Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Nome:"
            label-for="input-2"
            class="mb-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Digite o Nome"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Senha:"
            label-for="input-2"
            class="mb-2"
          >
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="Senha"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Tipo:"
            label-for="input-3"
            class="mb-2"
          >
            <b-form-select
              id="input-3"
              v-model="form.type"
              :options="types"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary" class="my-5"
            >Adicionar</b-button
          >
          <b-button type="reset" class="my-3 mx-3">Cancelar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getDatabase, ref, set } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        type: 'Administrador',
        checked: []
      },
      types: ['Administrador', 'Usuario'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.saveUser()
    },
    saveUser() {
      const { email, password, name, type } = this.form
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          const db = getDatabase()
          const payload = {
            id: user.uid,
            name,
            email,
            type
          }
          set(
            ref(db, 'users/' + localStorage.getItem('opuser') + '/' + user.uid),
            payload
          )
          this.$store.dispatch('saveUser', payload)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error('errorCode', errorCode)
          console.error('errorMessage', errorMessage)
        })
    },
    onReset(event) {
      event.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
