<template>
  <div class="alert alert-success text-center">
    <h1>Правильно!</h1>
    <hr>
    <button class="btn btn-primary" @click="onNextQuestion">Следующий вопрос</button>
  </div>
</template>
<style>

</style>
<script>

  export default {
    methods: {
      onNextQuestion () {
        this.$emit('confirmed')
      }
    }
  }
</script>
