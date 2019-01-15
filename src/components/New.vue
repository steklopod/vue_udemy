<template>
  <div>
    <h3>New</h3>
    <button @click="counter++">Увеличить</button>
    <p>{{counter}}</p>
  </div>
</template>


<script>
  export default {
    data () {
      return{
        counter: 0
      }
    },
    destroyed () {
      console.log("Компонент разрушен !!!")
    },
    deactivated () {
      console.log('ДЕАКТИВИРОВАНО')
    },
    activated () {
      console.log('АКТИВИРОВАНО')
    }
  }
</script>

<style scoped>

</style>
