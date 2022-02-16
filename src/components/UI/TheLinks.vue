<template>
    <ul>
      <li v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/signup">Sign Up</router-link>
      </li>
      <li v-if="isAuthenticated">
          <router-link to="/new">New</router-link>
      </li>
      <li v-if="isAuthenticated">
          <router-link to="/surveys">Surveys</router-link>
      </li>
      <li v-if="isAuthenticated" @click="logout">
          <router-link to="/login">Logout</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$store.dispatch('surveys/clearSurveys');
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  transition: .2s;
  width: 110px;
  text-align: center;
}

a:hover,
a:active,
a.active {
  color: #fff;
  border-color: #F64740;
  background-color: #F64740;
  border-radius: 5px;
  transition: .2s;
}

</style>