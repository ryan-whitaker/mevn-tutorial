<template>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
</template>

<script>
import TheHeader from './components/ui/TheHeader'

export default {
  components: {
    TheHeader,
  },
  created() {
        this.$store.dispatch('autoLogin');
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>
