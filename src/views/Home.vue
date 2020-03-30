<template>
  <div class="home">
    <div class="loading" v-if="ready">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-container v-if="!ready" class="main-container">
      <UsersDisplay />
      <UserForm />
    </b-container>

  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import UserForm from '../components/UserForm.vue';
import UsersDisplay from '../components/UsersDisplay.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['ready']),
  },
  components: {
    UserForm,
    UsersDisplay,
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.$store.state.users = res.data;
      });
  },
};
</script>

<style scoped>
.main-container{
  width: 100%;
  display: flex;
}

.loading{
  width: 5%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 280px;
}
</style>
