<template>
  <div v-on:mousemove="updateCoord">

    <div id="ввод данных">
      <h1 v-once>{{ msg }}</h1>
      <input type="text" v-on:keyup="change">
      <h3>{{msg}} - <a v-bind:href="link">Яндекс</a></h3>
    </div>

    <div id="счетчики">
      <button v-on:click="counter++">Кликни меня</button>
      <button v-on:click="increase(2)">Кликни меня +2</button>
      <p>{{counter > 10 ? 'Больше 10-ти' : counter}}</p>
    </div>

    <div id="координаты">
      Координаты: {{ x }} / {{ y }}
      - <span v-on:mousemove.stop="">Наведи сюда, чтобы остановить</span>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Начальное значение `msg`',
        link: 'https://yandex.ru',
        counter: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      change: function (event) {
        this.msg = event.target.value
      },
      increase: function (step) {
        this.counter += step
      },
      updateCoord: function (event) {
        this.x = event.clientX
        this.y = event.clientY
      }
    }
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
</style>
