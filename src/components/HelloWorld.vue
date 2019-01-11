<template>
  <div v-on:mousemove="updateCoord">

    <div id="ввод_данных" :class="{aqua: addRed, orange: !addRed}">
      <h1 v-once>{{ msg }}</h1>
      <input type="text" v-on:keyup="change">
      <h3>{{msg}} - <a :href="link">Яндекс</a></h3>
    </div>

    <div id="счетчики">
      <button @click="counter++" >Увеличить на 1</button>
      <button @click="increase(2)" :class="divClasses">Увеличить на 2</button>
      <button v-on:click="decrease">Уменьшить на 1</button>
      <p :class="{red: addRed}">{{result > 10 ? 'Больше 10-ти' : result}}</p>
    </div>

    <div id="координаты">
      Координаты: {{ x }} / {{ y }}
      - <span v-on:mousemove.stop="" class="grey">Наведи сюда, чтобы остановить</span>
    </div>

    <div id="двунаправленное_связывание">
      <input type="text" v-model="name">
      <p>{{name}}</p>
    </div>

    <button @click="addRed = ! addRed">Изменить цвет</button>

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
        y: 0,
        addRed: false
      }
    },
    computed: {
      result: function () {
        return this.counter == 5 ? 'Ура, счастливое число 5 !!!' : this.counter
      },
      divClasses: function () {
        return {
          blue: this.addRed, orange: !this.addRed
        }
      }
    },

    methods: {
      change: function (event) {
        this.msg = event.target.value
      },
      increase: function (step) {
        this.counter += step
        this.addRed = !this.addRed
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
        }, 3000)
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

  .red {
    color: red;
  }

  .orange {
    color: orange;
  }

  .aqua {
    background: aqua;
  }
</style>
