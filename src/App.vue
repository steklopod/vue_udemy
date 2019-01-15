<template>
  <div class="container">

    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">

      </div>
    </div>

    <app-new-quote
    @quoteAdded="newQuote"
    ></app-new-quote>

    <app-quote-grid :quotes="quotes"></app-quote-grid>


  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'

  export default {
    data () {
      return {
        quotes: [
          'Цитата по умолчанию'
        ],
        maxQoutes: 10
      }
    },
    methods: {
      newQuote (newQuote) {
        this.quotes.push(newQuote)
      }

    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    }
  }
</script>

<style scoped>
  div {
    margin: 10px auto;
    text-align: center;
  }

  p {
    color: orange;
    font-family: "Comic Sans MS", serif;
  }
</style>
