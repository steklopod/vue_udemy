<template>
  <div class="hello">
    <h1 v-once>{{ msg }}</h1>

    <div id="in">
      <input type="text" v-on:keyup="change">

      <H3>{{msg}} - <a v-bind:href="link">Яндекс</a></H3>

      <button v-on:click="increase(2)">Кликни меня</button>
      <p>{{counter}}</p>

      <p v-on:mousemove="updateCoord">
        Координаты: {{ x }} / {{ y }}
        - <span v-on:mousemove.stop="">ОСТАНОВИТ</span>
      </p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
