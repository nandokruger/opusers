<template>
  <div>
    <h2>Entrar</h2>
    <b-card class="mt-3" header="Login">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Digite o seu Email"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Digite sua senha"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary">Entrar</b-button>
      </b-form>
    </b-card>

    <b-card
      class="mt-3"
      header="Por favor adicione um usuario manualmente em Authentication Users (Firebase)"
    >
      :)
    </b-card>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'loginComponent',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      guestUser: {
        email: 'teste@teste.com',
        pass: '123456'
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.doLogin()
    },
    doLogin() {
      const { email, password } = this.form
      const auth = getAuth()
      console.log('auth', auth)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          localStorage.setItem('opuser', userCredential.user.uid)
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error('errorCode', errorCode)
          console.error('errorMessage', errorMessage)
        })
    }
  }
}
</script>
