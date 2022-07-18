<template>
    <nav class="navbar sticky-bottom navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><i class="bi bi-filetype-py"></i></a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>