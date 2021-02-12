<template>
  <div id="nav">
    <h2>va-button with `to` property</h2>
    <div>
      <va-button color="primary" to="/">
        <span class="button__text">Home</span>
      </va-button>
      <va-button color="success" to="/about">
        <span class="button__text">About</span>
      </va-button>
    </div>

    <div>
      <h2>component</h2>
      <div>
        <component :is="tag" :to="'/'">Home</component> |
        <component :is="tag" :to="'/about'">About</component>
      </div>
    </div>

    <div>
      <h2>router-link</h2>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>

  </div>
  <router-view />
</template>

<script>
export default {
  computed: {
    tag () {
      return 'router-link'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
