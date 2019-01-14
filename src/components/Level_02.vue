<template>
  <div id="main">

    <div id="видимость">
      <h4>Ты меня видишь?</h4>
      <h4 v-if="canSee">А меня?</h4>
      <button @click="canSee = !canSee">Изменить видимость</button>
    </div>

    <div id="список">
      <ul>
        <li v-for="(ingredient, i) in ingredients"> {{ingredient}} ({{ i }})
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Level_02',
    data () {
      return {
        canSee: true,
        ingredients: ['мясо', 'фрукт', 'печенье'],
        persons: [
          {name: 'Дима', age: 29, coloro: 'red'},
          {name: 'Вася', age: 18, coloro: 'red'}
        ]

      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<!-- Добавьте атрибут "scoped", чтобы ограничить CSS только этим компонентом -->
<style scoped>
  h1, h2 {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  span {
    border: black;
    border-style: solid
  }

  div {
    margin-top: 2em;
  }

</style>
