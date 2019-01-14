<template>
  <div id="main">
    <section class="row">

      <div class="small-6 columns">
        <h1 class="text-center">ТЫ</h1>
        <div class="healthbar">
          <div class="healthbar text-center"
               style="background-color: green; margin: 0; color: white;"
               :style="{ width: playerHealth + '%' }"
          >
            {{playerHealth}}
          </div>
        </div>
      </div>

      <div class="small-6 columns">
        <h1 class="text-center">МОНСТОР</h1>
        <div class="healthbar">
          <div class="healthbar text-center"
               style="background-color: green; margin: 0; color: white;"
               :style="{ width: monsterHealth + '%' }"
          >
            {{monsterHealth}}
          </div>
        </div>
      </div>
    </section>


    <section class="row controls">
      <div class="small-12 columns">
        <button id="start-game">Начать новую игру</button>
      </div>
    </section>

    <section class="row controls">
      <div class="small-12 columns">
        <button id="attack">АТАКА</button>
        <button id="special-attack">СПЕЦИАЛЬНАЯ АТАКА</button>
        <button id="heal">ИЗЛЕЧИТЬ</button>
        <button id="give-up">СДАЮСЬ</button>
      </div>
    </section>

    <section class="row log">
      <div class="small-12 columns">
        <ul>
          <li>

          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'Level_04',
    data () {
      return {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<!-- Добавьте атрибут "scoped", чтобы ограничить CSS только этим компонентом -->
<style scoped>
  .text-center {
    text-align: center;
  }

  .healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
  }

  .controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
  }

  .turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
  }

  .log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  .log ul li {
    margin: 5px;
  }

  .log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
  }

  .log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
  }

  button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
  }

  #start-game {
    background-color: #aaffb0;
  }

  #start-game:hover {
    background-color: #76ff7e;
  }

  #attack {
    background-color: #ff7367;
  }

  #attack:hover {
    background-color: #ff3f43;
  }

  #special-attack {
    background-color: #ffaf4f;
  }

  #special-attack:hover {
    background-color: #ff9a2b;
  }

  #heal {
    background-color: #aaffb0;
  }

  #heal:hover {
    background-color: #76ff7e;
  }

  #give-up {
    background-color: #ffffff;
  }

  #give-up:hover {
    background-color: #c7c7c7;
  }
</style>
