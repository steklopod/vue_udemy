<template>
  <div class="container">

    <app-header :quoteCount="quotes.length" :max-qoutes="maxQoutes"></app-header>
    <app-new-quote
      @quoteAdded="newQuote"
    ></app-new-quote>

    <app-quote-grid
      @quoteDeleted="deleteQuote"
      :quotes="quotes"></app-quote-grid>

    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Кликни по цитате, чтобы удалить ее</div>
      </div>
    </div>


  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'
  import Header from './components/Header.vue'

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
      deleteQuote (index) {
        this.quotes.splice(index, 1)
      },
      newQuote (newQuote) {
        if(this.quotes.length >= this.maxQoutes){
          alert('Больше нельзя!')
        }
        this.quotes.push(newQuote)
      }

    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header
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
