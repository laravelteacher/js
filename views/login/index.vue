<template>
  <div>
    <Nav />
    <div class="container">
      <!---- Navbar -->

      <div class="col-md-6 mt-5">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <form class="user" @submit.prevent="login">
          <div class="form-group">
            <input
              type="email"
              class="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
              v-model="email"
            />
          </div>
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
            <div class="custom-control custom-checkbox small">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
              />
              <label class="custom-control-label" for="customCheck"
                >Remember Me</label
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-user btn-block">
            Login
          </button>
        </form>
        <hr />
        <div class="text-center">
          <router-link class="small" to="/forgot-password"
            >Forgot Password?</router-link
          >
        </div>
        <div class="text-center">
          <router-link class="small" to="/register"
            >Create an Account!</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Welcome
import axios from "axios";
import Nav from "../layout/Nav";
import * as notify from "../utils/notify.js"; // this is for Notification of each ERROR

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      verificationStatus: this.$route.query.verification_status ? true : false,
      verificationMessage: "",
      verificationAlertClasses: {
        "alert-success": false,
        "alert-danger": false,
      },
    };
  },
  created: function () {
    if (this.$route.query.verification_status === "success") {
      this.verificationMessage =
        "Your account has been verified. Please log in.";
      this.verificationAlertClasses["alert-success"] = true;
    } else if (this.$route.query.verification_status === "error") {
      this.verificationMessage = "Your account could not be verified.";
      this.verificationAlertClasses["alert-danger"] = true;
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/admin");
      } catch (error) {
        notify.authError(error);
      }
    },
  },
};
</script>

<style>
</style>