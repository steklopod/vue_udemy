<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ name }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ' Need Some Name :-( '
      }
    },
    methods: {
      swithName () {
        return this.name.split('').reverse().join('')
      }
    }

  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
