<template>
  <div class="container">
    <form>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Подать жалобу</h1>
          <hr>
          <div class="form-group">
            <label for="email">Электронная почта</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email"
            >
          </div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy.trim="userData.password"
            >
          </div>

          <div class="form-group">
            <label for="age">Возраст</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number="userData.age"
            >
          </div>

        </div>
      </div>

      <!--Сообщение-->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Сообщение</label><br>
          <!-- Интерполяция между <textarea> {{test}} </textarea> не работает!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Отправить Email
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Отправить Infomail
            </label>
          </div>

        </div>
      </div>


      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Мужской"
              v-model="gender"
            > Мужской
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Женский"
              v-model="gender"
            > Женский
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Приоритетность</label>
          <select
            id="priority"
            class="form-control">
            v-model="selectedPriority"
            <option v-for="priority in priorites">{{priority}}</option>
          </select>
        </div>
      </div>

      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary">Отправить!
          </button>
        </div>
      </div>
    </form>
    <hr>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Твои Данные</h4>
          </div>
          <div class="panel-body">
            <p>Почта: {{userData.email}}</p>
            <p>Пароль: {{userData.password}}</p>
            <p>Возраст: {{userData.age}}</p>
            <p style="white-space: pre">Сообщение: {{message}}</p>
            <p><strong>Отправлен email?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{item}}</li>
            </ul>
            <p>Пол: {{gender}}</p>
            <p>Приоритет: {{selectedPriority}}</p>
            <p>Переключаемый:</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          email: '',
          password: '',
          age: 29
        },
        message: 'Сообщение здесь',
        sendMail: [],
        gender: 'Мужской',
        priorites: ['Высокая', 'Средняя', 'Низкая'],
        selectedPriority: 'Высокая'

      }
    }

  }
</script>

<style>

</style>
