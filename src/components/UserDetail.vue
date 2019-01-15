<template>
  <div class="component">
    <h3>You may view the User Details here</h3>

    <p>Many Details</p>
    <p>User name: {{ name }}</p>
    <p>User age: {{ userAge }}</p>

    <button @click="resetName">Reset name</button>
    <button @click="resetFn">Reset name 2</button>
  </div>
</template>

<script>
  import {eventBus} from '../main.js'

  export default {
    props: {
      name: {
        type: String,
        default: ' Need Some Name :-( '
      },
      resetFn: Function,
      userAge: Number
    },

    methods: {
      swithName () {
        return this.name.split('').reverse().join('')
      },
      resetName () {
        this.name = 'Dima'
        this.$emit('nameWasReset', this.name)
      }
    },
    created () {
      eventBus.$on('ageWasEdited', (data) => {
        this.userAge = data
      })

    }

  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
