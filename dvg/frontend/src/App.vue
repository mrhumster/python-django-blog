<template>
    <div id="app">
        <NavBar />
        <div class="container-fluid">
            <router-view></router-view>  
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

* + * {
  margin-top: 1.5rem;
}

#app {
  margin: 0;
  padding: 0;
}

</style>
