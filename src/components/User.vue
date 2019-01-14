<template>
  <div class="component">
    <h1>The User Component</h1>

    <button @click="changeName">Change my name</button>

    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail name="$name"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  export default {
    data () {
      return {
        name: 'Dima'
      }
    },
    methods: {
      changeName () {
        this.name = 'Vasya'
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
