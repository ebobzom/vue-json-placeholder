<template>
<div class="form-field">
    <div>
        <div>
            <b-card bg-variant="light">
                <b-form-group
                    label-cols-sm="3"
                    label="Name:"
                    label-align-sm="right"
                    label-for="nested-name"
                >
                    <b-form-input id="nested-name" v-model="name"></b-form-input>
                </b-form-group>

                <!-- <b-form-group
                    label-cols-sm="3"
                    label="User Name:"
                    label-align-sm="right"
                    label-for="nested-username"
                >
                    <b-form-input id="nested-username" v-model="username"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="E-mail:"
                    label-align-sm="right"
                    label-for="nested-email"
                >
                    <b-form-input type="email" id="nested-email" v-model="email"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Address:"
                    label-align-sm="right"
                    label-for="nested-address"
                >
                    <b-form-input id="nested-address" v-model="address"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Phone:"
                    label-align-sm="right"
                    label-for="nested-phone"
                >
                    <b-form-input type="number" id="nested-phone" v-model="phone"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Website:"
                    label-align-sm="right"
                    label-for="nested-website"
                >
                    <b-form-input id="nested-website" v-model="website"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="company:"
                    label-align-sm="right"
                    label-for="nested-company"
                >
                    <b-form-input id="nested-company"></b-form-input>
                </b-form-group> -->
                <b-button @click="add">Add User</b-button>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
import uniqid from 'uniqid';

export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      company: '',
      address: '',
    };
  },
  methods: {
    add() {
      this.$store.commit('updateUsersArray', {
        id: uniqid(),
        name: this.name,
        username: this.username,
        email: this.email,
        phone: this.phone,
        website: this.website,
        company: this.company,
        address: this.address,
      });
    },
  },
};
</script>

<style scoped>
.form-field{
    width: 40%;
}
</style>
