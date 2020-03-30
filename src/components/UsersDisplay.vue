<template>
  <div class="users">
    <b-list-group>
        <b-list-group-item v-for="user in users" :key="user.id">
            <p>{{ user.name }} <button @click="toggle"> Details</button></p>
            <!-- <div :id="user.id" v-if="detail">
              <p>User Name: {{user.username}}</p>
              <p>Company: {{ user.company.name}}</p>
              <p>Phone: {{user.phone}}</p>
            </div> -->
            <b-button @click="deleteUser(user.id)">Delete User</b-button>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      detail: false,
    };
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    deleteUser(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
        this.$store.commit('deleteUser', id);
      });
    },

    toggle(e) {
      console.dir(e.target.gettAtribute('id'));
      this.detail = true;
    },
  },

};
</script>

<style>
.users{
    width: 60%;
    margin: 2px;
    margin-right: 4px;
    padding: 2px;
}
</style>
