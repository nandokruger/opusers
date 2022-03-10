<template>
  <div id="app">
    <AppHeader />
    <main id="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { getDatabase, ref, child, get } from 'firebase/database'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    const dbRef = ref(getDatabase())
    get(child(dbRef, 'users/' + localStorage.getItem('opuser')))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((doc) => {
            this.$store.dispatch('saveUser', doc.val())
          })
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style lang="scss">
body,
ul,
li,
h1,
h2 p {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1;
}
</style>
