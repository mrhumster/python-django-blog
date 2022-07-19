<template>
    <div>
        <NavBar />
        <div class="container-fluid"  style="max-width: 60rem;">
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
    height: 100%;
    overflow-y: hidden; /* don't show content that exceeds my height */

}
</style>
