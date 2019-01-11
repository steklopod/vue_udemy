<template>
  <div v-on:mousemove="updateCoord">

    <div id="ввод данных">
      <h1 v-once>{{ msg }}</h1>
      <input type="text" v-on:keyup="change">
      <h3>{{msg}} - <a v-bind:href="link">Яндекс</a></h3>
    </div>

    <div id="счетчики">
      <button v-on:click="counter++">Увеличить на 1</button>
      <button v-on:click="increase(2)">Увеличить на 2</button>
      <button v-on:click="decrease">Уменьшить на 1</button>
      <p>{{counter > 10 ? 'Больше 10-ти' : counter}}</p>
    </div>

    <div id="координаты">
      Координаты: {{ x }} / {{ y }}
      - <span v-on:mousemove.stop="">Наведи сюда, чтобы остановить</span>
    </div>

    <div id="двунаправленное_связывание">
      <input type="text" v-model="name">
      <p>{{name}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Начальное значение `msg`',
        name: 'Дима',
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
      decrease: function () {
        this.counter--
      },
      updateCoord: function (event) {
        this.x = event.clientX
        this.y = event.clientY
      }
    },
    watch: {
      counter: function (value) {
        var vm = this
        setTimeout(function () {
          vm.counter = 0
        }, 2000)
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

  div {
    margin-top: 2em;
  }
</style>
