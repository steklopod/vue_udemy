<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <hr>
        <p>Выбранный компонент: {{selectedComponent}}</p>

        <keep-alive>
          <component :is="selectedComponent">
            <p>По умолчанию</p>
          </component>
          <!--<app-quote>-->
          <!--<h2 slot="title">{{quoteTitle}}</h2>-->
          <!--<p slot="content">Жить прекрасно</p>-->
          <!--</app-quote>-->
        </keep-alive>
        <hr/>

      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Author from './components/Author.vue'
  import New from './components/New.vue'

  export default {
    data () {
      return {
        quoteTitle: ' Цитата №1',
        selectedComponent: 'appQuote'
      }
    },

    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New,
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
