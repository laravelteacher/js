<template>
  <div>
    <Nav />
    <div class="container">
      <div class="col-md-6 mt-5">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-2">Reset your password</h1>
        </div>
        <form class="user" @submit.prevent="reset">
          <div class="form-group">
            <input
              type="password"
              class="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control form-control-user"
              id="exampleRepeatPassword"
              placeholder="Repeat Password"
              v-model="password_confirm"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-user btn-block">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as notify from "../utils/notify.js";
import Nav from "../layout/Nav";

export default {
  name: "Reset",
  components: {
    Nav,
  },
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async reset() {
      try {
        const response = await axios.post("reset", {
          password: this.password,
          password_confirm: this.password_confirm,
          token: this.$route.params.token,
        });

        let toast = this.$toasted.show("Password updated successfully", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000,
        });

        this.$router.push("/login");
      } catch (error) {
        notify.authError(error);
      }
    },
  },
};
</script>