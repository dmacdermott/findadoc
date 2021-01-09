<template>
  <header>
    <div>
      <nuxt-link to="/"><h1 class="title">Find a Doc</h1></nuxt-link>
    </div>
    <div>
      <nuxt-link to="/signup" class="button--green">Sign Up</nuxt-link>
      <nuxt-link to="/login" class="button--grey">Login</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
header {
  /* position: fixed;
    top: 0;
    left: 0; */
  width: 100%;
  padding: 15px 30px;
  /* background-color: #F4F2EE; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
</style>