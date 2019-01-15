<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

        <app-quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p slot="content">Жить прекрасно</p>
        </app-quote>

      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'

  export default {
    data () {
      return {
        quoteTitle: ' Цитата №1'

      }
    },

    components: {
      appQuote: Quote
    }
  }
</script>

<style scoped>

</style>
